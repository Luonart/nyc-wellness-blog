import { TinaCMS } from 'tinacms'

// TinaCMS configuration
const tinaConfig = {
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: 'main',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
}

export default function AdminPage() {
  // Check if environment variables are set
  if (!process.env.NEXT_PUBLIC_TINA_CLIENT_ID || !process.env.TINA_TOKEN) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              TinaCMS Admin
            </h1>
            <p className="text-gray-600 mb-4">
              Environment variables not configured
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-800 text-sm">
                Missing environment variables:
              </p>
              <ul className="text-red-800 text-sm text-left mt-2 space-y-1">
                <li>• NEXT_PUBLIC_TINA_CLIENT_ID</li>
                <li>• TINA_TOKEN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <TinaCMS {...tinaConfig}>
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              TinaCMS Admin
            </h1>
            <p className="text-gray-600">
              Content management interface loading...
            </p>
          </div>
        </div>
      </div>
    </TinaCMS>
  )
}
