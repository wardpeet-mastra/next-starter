'use client'

import { useActionState } from 'react'
import { getWeatherStream } from '../action'

export function WeatherForm() {
  const [result, startWeatherStream, pending] = useActionState(getWeatherStream, null)

  return (
    <div className="flex flex-col gap-4">
      <form action={startWeatherStream} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2 bg-transparent"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2 bg-transparent"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          {pending ? 'Loading...' : 'Get Weather Stream'}
        </button>
      </form>

      {result && (
        <div className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4 bg-transparent">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
} 