use('lms');
db.lectures.updateMany(
  { videoUrl: { $exists: false } },
  { $set: { videoUrl: "https://your-cloudinary-video-link.mp4" } }
)
