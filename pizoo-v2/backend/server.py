from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime
from typing import List, Optional
import os
from dotenv import load_dotenv
import base64
import asyncio

load_dotenv()

app = FastAPI(title="Pizoo V2 API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3002", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'pizoo_v2')

try:
    client = MongoClient(MONGO_URL)
    db = client[DB_NAME]
    print(f"Connected to MongoDB: {DB_NAME}")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")

# Collections
blog_posts = db.blog_posts
swipe_stories = db.swipe_stories
team_members = db.team_members
faq_items = db.faq_items
uploaded_images = db.uploaded_images


@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Pizoo V2 API"}


# Blog endpoints
@app.get("/api/blog")
def get_blog_posts(skip: int = 0, limit: int = 10):
    posts = list(blog_posts.find({}, {"_id": 0}).sort("date", -1).skip(skip).limit(limit))
    return {"posts": posts, "total": blog_posts.count_documents({})}


@app.get("/api/blog/{post_id}")
def get_blog_post(post_id: str):
    post = blog_posts.find_one({"id": post_id}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post


@app.post("/api/admin/blog")
def create_blog_post(post: dict):
    post["id"] = str(ObjectId())
    post["date"] = datetime.utcnow().isoformat()
    result = blog_posts.insert_one(post)
    return {"message": "Blog post created", "id": post["id"]}


@app.put("/api/admin/blog/{post_id}")
def update_blog_post(post_id: str, post: dict):
    result = blog_posts.update_one({"id": post_id}, {"$set": post})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post updated"}


@app.delete("/api/admin/blog/{post_id}")
def delete_blog_post(post_id: str):
    result = blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted"}


# Swipe Stories endpoints
@app.get("/api/stories")
def get_stories(skip: int = 0, limit: int = 10):
    stories = list(swipe_stories.find({}, {"_id": 0}).sort("date", -1).skip(skip).limit(limit))
    return {"stories": stories, "total": swipe_stories.count_documents({})}


@app.get("/api/stories/{story_id}")
def get_story(story_id: str):
    story = swipe_stories.find_one({"id": story_id}, {"_id": 0})
    if not story:
        raise HTTPException(status_code=404, detail="Story not found")
    return story


@app.post("/api/admin/stories")
def create_story(story: dict):
    story["id"] = str(ObjectId())
    story["date"] = datetime.utcnow().isoformat()
    result = swipe_stories.insert_one(story)
    return {"message": "Story created", "id": story["id"]}


@app.put("/api/admin/stories/{story_id}")
def update_story(story_id: str, story: dict):
    result = swipe_stories.update_one({"id": story_id}, {"$set": story})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Story not found")
    return {"message": "Story updated"}


@app.delete("/api/admin/stories/{story_id}")
def delete_story(story_id: str):
    result = swipe_stories.delete_one({"id": story_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Story not found")
    return {"message": "Story deleted"}


# Team endpoints
@app.get("/api/team")
def get_team_members():
    members = list(team_members.find({}, {"_id": 0}))
    return {"members": members}


@app.post("/api/admin/team")
def create_team_member(member: dict):
    member["id"] = str(ObjectId())
    result = team_members.insert_one(member)
    return {"message": "Team member created", "id": member["id"]}


# FAQ endpoints
@app.get("/api/faq")
def get_faq_items():
    items = list(faq_items.find({}, {"_id": 0}))
    return {"items": items}


@app.post("/api/admin/faq")
def create_faq_item(item: dict):
    item["id"] = str(ObjectId())
    result = faq_items.insert_one(item)
    return {"message": "FAQ item created", "id": item["id"]}


# Image generation endpoint using OpenAI
@app.post("/api/admin/generate-image")
async def generate_image(prompt: str):
    try:
        from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration
        
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="API key not configured")
        
        image_gen = OpenAIImageGeneration(api_key=api_key)
        images = await image_gen.generate_images(
            prompt=prompt,
            model="gpt-image-1",
            number_of_images=1
        )
        
        if images and len(images) > 0:
            image_base64 = base64.b64encode(images[0]).decode('utf-8')
            
            # Store in MongoDB
            image_doc = {
                "id": str(ObjectId()),
                "prompt": prompt,
                "image_base64": image_base64,
                "created_at": datetime.utcnow().isoformat()
            }
            uploaded_images.insert_one(image_doc)
            
            return {
                "image_base64": image_base64,
                "image_id": image_doc["id"]
            }
        else:
            raise HTTPException(status_code=500, detail="No image was generated")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image generation failed: {str(e)}")


@app.get("/api/images/{image_id}")
def get_image(image_id: str):
    image = uploaded_images.find_one({"id": image_id}, {"_id": 0})
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")
    return image


if __name__ == "__main__":
    import uvicorn
    # Port 8000 for local development on Mac
    # Port 8002 for Emergent environment
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
