import express from 'express';
import model from '../model'
// gyums code start // 
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
// gyums code end // 
const router = express.Router();

// gyums code start // 
passport.serializeUser(function(user, done) {
  console.log('passport success');
  console.log("here is serialize", user);
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  console.log('passport session get id : ', id);
  done(null, id);
});

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  console.log('local-login call called');
  console.log(email, password, req.body);

// .then(data => {console.log("query result:");
// console.log(data)
// })
  const result = model.getUsersByEmail(email)
  .then((data) => {
  if(data){
  return done(null, {message: "authenticate sign in succes next is serialize"});
}else{
  return done(null, false, {message: "authenticate sign in fail next ?"})
}}
)
  
  
  //아디디가 있는지 확인
    //없으면 "다시 시도하십시오 반환"
  //비밀번호가 있는지 확인
    //없으면 "다시 시도하십시오 반환"
}))
// gyums code end // 

router.get('/', (req, res) => {
  res.render('index');
});

//recommendation books
router.post('/books', (req, res, next) => {
  const books = req.body;

  books
    .filter(book => book.isbn)
    .forEach(book => model.insertEachBookInfo(book)
      .then(result => console.log('success'))
      .catch(error => console.log('error', error)));
  res.send(true);
});

router.get('/posts', (req, res, next) => {
  model.getPostsByPostId()
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (errors) {
      res.send(errors);
    })
});

router.post('/login', (req,res,next) =>{
  console.log("ajax client login data");
  console.log(req.body);
  passport.authenticate('local-login', function(err, user, info){
    console.log("authenticate in : ", user, info);
    //이상한 경우의 조건 처리

    req.logIn(user, function(err){
      if(err) {return next(err); }
      return res.send("local-login ok");
    })
  })(req,res,next);
})

export default router;
