import { TinaCMS } from 'tinacms'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

// Import the TinaCMS configuration
import tinaConfig from '../../../tina/config'

export default function AdminPage() {
  return (
    <TinaEditProvider
      editMode={
        <TinaCMS {...tinaConfig}>
          <div className="min-h-screen bg-gray-100">
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  TinaCMS Admin
                </h1>
                <p className="text-gray-600">
                  Content management interface will load here
                </p>
              </div>
            </div>
          </div>
        </TinaCMS>
      }
    >
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              TinaCMS Admin
            </h1>
            <p className="text-gray-600 mb-4">
              Click the edit button to enter edit mode
            </p>
            <button
              onClick={() => {
                // This will be handled by TinaCMS
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enter Edit Mode
            </button>
          </div>
        </div>
      </div>
    </TinaEditProvider>
  )
}
