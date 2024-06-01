const request = require('supertest');
const app = require('../index.js');
 const jwt = require('jsonwebtoken'); // Import JWT library

describe('Demande Unit test', () => {
    // Assuming you have a function to generate JWT token
    const generateToken = (userId) => {
        return jwt.sign({ id: userId }, 'ACCC009*09', { expiresIn: '1h' });
    };

     
    const userId = '1';

    it('should create a new demande item', async () => {
        const newItem = {
            localisation: "Test",
            description: "Test",
            userId:1
        };

         
        const token = generateToken(userId);

        const res = await request(app)
            .post('/api/demande/create')
            .set('Authorization', `${token}`)  
            .send(newItem);

        console.log(res.body);
        expect(res.statusCode).toEqual(201);
        expect(res.body.success).toEqual(true);
       
    });

      it('should read list of my demande', async () => {
          
        const generateToken = (userId) => {
            return jwt.sign({ id: userId }, 'ACCC009*09', { expiresIn: '1h' });
        };
    
        // Let's assume you have a user ID to generate a token for
        const userId = '1';
        const token = generateToken(userId);
          const res = await request(app)
              .get('/api/demande/getMyDemande')
              .set('Authorization', `${token}`); 

     
          expect(res.statusCode).toEqual(200);
          expect(res.body.length).toBeGreaterThan(0); 
      });
});