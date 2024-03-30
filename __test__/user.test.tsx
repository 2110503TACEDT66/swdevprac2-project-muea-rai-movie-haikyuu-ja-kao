import '@testing-library/jest-dom'
import userLogIn from '@/libs/userLogIn'
import getUserProfile from '@/libs/getUserProfile'

describe('User', () => {
    var logInPromise:Promise<Object>
    var logInJsonResult:Object
    var token:string
    var profilePromise:Promise<Object>
    var profileJsonResult:Object

    beforeAll(async () => {
        const email = "hermione@gmail.com"
        const password = "12345678"
        logInPromise = userLogIn(email, password)
        logInJsonResult = await logInPromise

        token = logInJsonResult.token
        profilePromise = getUserProfile(token)
        profileJsonResult = await profilePromise
      })

      it('userLogIn must return correct results', () => {
        expect(logInJsonResult._id).toMatch(/65e590e8aa484ec3be564a48/i)
        expect(logInJsonResult.email).toMatch(/hermione@gmail.com/i) 
      })
    
      it('getUserProfile must return correct results', () => {
        var profileData = profileJsonResult.data
        expect(profileData._id).toMatch(/65e590e8aa484ec3be564a48/i)
        expect(profileData.name).toMatch(/Hermione Granger/i)
        expect(profileData.tel).toMatch(/088-888-8888/i)
        expect(profileData.email).toMatch(/hermione@gmail.com/i)
        expect(profileData.role).toMatch(/user/i) 
      })
})