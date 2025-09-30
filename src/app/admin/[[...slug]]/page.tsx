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
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-blue-800 text-sm">
                Environment variables detected:
              </p>
              <ul className="text-blue-800 text-sm text-left mt-2 space-y-1">
                <li>• NEXT_PUBLIC_TINA_CLIENT_ID: {process.env.NEXT_PUBLIC_TINA_CLIENT_ID ? '✅ Set' : '❌ Missing'}</li>
                <li>• TINA_TOKEN: {process.env.TINA_TOKEN ? '✅ Set' : '❌ Missing'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            TinaCMS Admin
          </h1>
          <p className="text-gray-600 mb-4">
            Environment variables are configured!
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-800 text-sm">
              ✅ Environment variables detected:
            </p>
            <ul className="text-green-800 text-sm text-left mt-2 space-y-1">
              <li>• NEXT_PUBLIC_TINA_CLIENT_ID: {process.env.NEXT_PUBLIC_TINA_CLIENT_ID ? 'Set' : 'Missing'}</li>
              <li>• TINA_TOKEN: {process.env.TINA_TOKEN ? 'Set' : 'Missing'}</li>
            </ul>
            <p className="text-green-800 text-sm mt-2">
              TinaCMS should initialize automatically. If you don't see the CMS interface, 
              try refreshing the page or check the browser console for errors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
