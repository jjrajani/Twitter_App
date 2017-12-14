const tweets = [
  {
    id: 54321,
    created_at: new Date().toISOString(),
    favorite_count: 12,
    text: 'Its a tweet',
    user: {
      url: 'http://fake.com',
      screen_name: 'humdrum',
      profile_background_color: '3d42a7',
      profile_background_image_url: 'http://fake.com',
      profile_image_url: 'http://fake.com'
    }
  },
  {
    id: 12345,
    created_at: new Date().toISOString(),
    favorite_count: 12,
    text: 'Its a tweet',
    user: {
      url: 'http://fake.com',
      screen_name: 'humdrum',
      profile_background_color: '3d42a7',
      profile_background_image_url: 'http://fake.com',
      profile_image_url: 'http://fake.com'
    }
  }
];

export default tweets;
