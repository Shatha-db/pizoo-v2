'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FileText, Users, Heart, HelpCircle, Image, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const adminSections = [
    {
      title: 'Blog Posts',
      description: 'Create, edit, and manage blog posts',
      icon: FileText,
      href: '/admin/blog',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Swipe Stories',
      description: 'Manage success stories from users',
      icon: Heart,
      href: '/admin/stories',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Team Members',
      description: 'Add or edit team member profiles',
      icon: Users,
      href: '/admin/team',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'FAQ Items',
      description: 'Manage frequently asked questions',
      icon: HelpCircle,
      href: '/admin/faq',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Image Generator',
      description: 'Generate AI images for content',
      icon: Image,
      href: '/admin/images',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-pizoo rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Pizoo Admin</h1>
                <p className="text-sm text-gray-600">Content Management System</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-pizoo-pink transition-colors"
              data-testid="admin-logout-button"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h2>
          <p className="text-gray-600">Manage your Pizoo content from here</p>
        </div>

        {/* Admin Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Link key={index} href={section.href}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" data-testid={`admin-section-${index}`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-pizoo-pink transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-gradient mb-1">42</div>
            <div className="text-sm text-gray-600">Blog Posts</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-gradient mb-1">28</div>
            <div className="text-sm text-gray-600">Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-gradient mb-1">6</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-gradient mb-1">10</div>
            <div className="text-sm text-gray-600">FAQ Items</div>
          </div>
        </div>
      </div>
    </div>
  );
}
