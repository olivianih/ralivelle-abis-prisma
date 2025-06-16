import { cookies } from 'next/headers'
import { db } from './data'
import crypto from 'crypto'

export async function createSession(userId: number) {
  const token = crypto.randomUUID()
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  await db`
    INSERT INTO sessions (user_id, session_token, expires_at)
    VALUES (${userId}, ${token}, ${expiresAt})
  `

  cookies().set('session', token, {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'lax',
    expires: expiresAt
  })
}

// verifySession() ...