import mongoose from 'mongoose'

// An interface that describes the props
// that are required for creating a new User
interface UserAttributes {
  email: string
  password: string
}

// an interface that describes the props
// that a user model has
interface UserModel extends mongoose.Model<UserDocument> {
  build(attrs: UserAttributes): UserDocument
}

// an interface that describes the props
// that a single user document has
interface UserDocument extends mongoose.Document {
  email: string
  password: string
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.statics.build = (attrs: UserAttributes) => {
  return new User(attrs)
}

const User = mongoose.model<UserDocument, UserModel>('User', userSchema)

export { User }
