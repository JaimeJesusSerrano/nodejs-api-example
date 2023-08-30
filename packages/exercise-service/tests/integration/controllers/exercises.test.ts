import request from 'supertest'

import app from '../../../index'
import { ExerciseToCreate } from '../../../types/api/Exercise'

const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iUCROHt6JHANdtzT6aOuUgOqVFRalOW20SbzRsn5SkI'

describe('[Controllers][Exercises] post', () => {
  beforeAll(() => {})

  test('Not authorized', async () => {
    const data: ExerciseToCreate = {
      content:
        '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      user_id: 'f7b98ed8-4dea-497e-8fcc-8ca3177b5b06',
    }
    const res = await request(app).post('/exercises').send(data)
    expect(res.status).toBe(401)
  })

  test('Invalid authorization', async () => {
    const data: ExerciseToCreate = {
      content:
        '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      user_id: 'f7b98ed8-4dea-497e-8fcc-8ca3177b5b06',
    }
    const res = await request(app).post('/exercises').send(data).set('Authorization', 'Bearer 123456')
    expect(res.status).toBe(403)
  })

  test('Valid authorization', async () => {
    const data: ExerciseToCreate = {
      content:
        '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      user_id: 'f7b98ed8-4dea-497e-8fcc-8ca3177b5b06',
    }
    const res = await request(app).post('/exercises').send(data).set('Authorization', authorization)
    expect(res.status).toBe(200)
  })

  test('Content has more than 100 characters', async () => {
    const data: ExerciseToCreate = {
      content:
        '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      user_id: 'f7b98ed8-4dea-497e-8fcc-8ca3177b5b06',
    }
    const res = await request(app).post('/exercises').send(data).set('Authorization', authorization)
    expect(res.status).toBe(400)
  })
})
