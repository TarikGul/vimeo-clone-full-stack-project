# #File that the seed videos will come from
# mp4_file = [
#   'beach.mp4',
#   'buildings.mp4',
#   'final_video.mp4',
#   'trees.mp4'
# ]

# #file that the seed thumbnails will come from
# thumbnails = [
#   'beach.png',
#   'buildings.png',
#   'thumbnail.png',
#   'trees.png'
# ]

# post_names = [
#   'Watching Sunsets',
#   "Creating a birdhouse",
#   "Imagine a world of Silence",
#   "This is my bestfriend",
#   "I cant sleep, but i can dream",
#   "Maybe, just maybe",
#   "The Experience",
#   "Sky High",
#   "Playing Nice",
#   "Washing Your Hands",
#   "May",
#   "Adventure's On The Ground",
#   "Follow the leader",
#   "Like it or not",
#   "Montana, and more",
#   "Architects",
#   "This is Amazing",
#   "Cards or not",
#   "The Coast is my Heart",
#   "Walking never ends",
#   "Just Live",
#   "Music for the soul",
#   "Recent Discoveries",
#   "Memories",
#   "Sealing The Pain",
#   "Friendships",
#   "School for thought",
#   "Pennies",
#   "Where and how",
#   "Make ammends",
#   "Watch the fallen",
#   "Sand is all I need"
# ]

# VideoPlay.destroy_all
# Follower.destroy_all
# Like.destroy_all
# Comment.destroy_all
# Post.destroy_all
# User.destroy_all

# def generate_random_string(n)
#   alpha = ("a".."z").to_a
#   sample = []

#   (1..n).each do |i|
#     rand_num = rand(0...27)
#     sample << alpha[rand_num]
#   end

#   sample.join('')
# end

# def generate_random_number(n)
#   sampleSymbols = ['!', '@', '#', '$', '%', '&', '?', '*']
#   sample = ''

#   (0..n).each do |i|
#     sample += rand(10).to_s
#   end

#   (0..(rand(n)+1)/2).each do |i|
#     sample[rand(n) - 1] = sampleSymbols.sample()
#   end
#   sample
# end

# def generate_random_description(n)
#   description = [];
  
#   rand_length = rand(3..7)
#   (0..n).each do 
#     rand_word = generate_random_string(rand_length)
#     if rand_word[-1] == 'c'
#       description << (rand_word + '.')
#     else 
#       description << rand_word
#     end
#   end

#   return description.join(' ')
# end

# MEGABYTES = 1024.0 * 1024.0
# def bytes_to_megabytes (bytes)
#     bytes / MEGABYTES
# end

# # This is the user sections of the seed file

# User.create({ username: 'bot-life', email: 'bot-bimeo@gmail.com', password: 'password'})
# User.create({ username: 'guest', email: 'guest@gmail.com', password: 'password' })
# (1..20).each do |i| 
#   User.create({ 
#     username: "User-" + (generate_random_string(4) + generate_random_number(8)), 
#     email: generate_random_string(6) + "@gmail.com",
#     password: 'password'
#   })
# end

# random_user = rand(User.all.length - 10) + 8


# #This is the post sections of the seed file
# (0..12).each do |i|
#   # Making sure files are looped through
#   x = i % 4
  
#   # File size for posts
#   size = File.size("/Users/tarik/Desktop/videos/#{mp4_file[x]}")
#   bytes = bytes_to_megabytes(size).to_f.round
  
#   # movie = FFMPEG::Movie.new(File.read(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[x]}")))
#   # movie = FFMPEG::Movie.new(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[x]}"))
#   movie = FFMPEG::Movie.new("/Users/tarik/Desktop/videos/#{mp4_file[x]}")
#   post = Post.create!({ 
#     title: post_names[i], 
#     user_id: User.all[rand(User.all.length - 10) + 9].id, 
#     password_protected: false,
#     description: generate_random_description(60),
#     duration: movie.duration,
#     bytes: bytes
#   })

#   post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[x]}")), filename: mp4_file[x])
#   post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "#{thumbnails[x]}")), filename: thumbnails[x])
#   puts "#{i}/26"
# end

# random_post = rand(Post.all.length - 10) + 8

# #This is the Follows section of the seeds file

# # ----------------Follower.create({ user_id: User.all[random_user].id, follower_id: User.all[random_user].id })

# (4..10).each do |i|
#   leaderUser = User.all[i]
#   Follower.create({ user_id: leaderUser.id, follower_id: User.all[2].id })
# end

# (7..15).each do |i|
#   leaderUser = User.all[i]
#   Follower.create({ user_id: leaderUser.id, follower_id: User.all[3].id })
# end

# # Attaches a video url to a post. This is how we would open a file and attach 
# # It to the state of an object on the backend



# # counter = 0
# # Post.all.each do |post|
# #   counter = 0 if counter == 4
# #   puts counter

# #   post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[counter]}")), filename: mp4_file[counter])
# #   post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "#{thumbnails[counter]}")), filename: thumbnails[counter])
# #   counter += 1 
# # end

# (0..12).each do |i|
#   # File size for posts 
#   size = File.size("/Users/tarik/Desktop/videos/final_video.mp4")
#   bytes = bytes_to_megabytes(size).to_f.round
#   # movie = FFMPEG::Movie.new(File.read(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4')))
#   # movie = FFMPEG::Movie.new(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4'))
#   movie = FFMPEG::Movie.new("/Users/tarik/Desktop/videos/final_video.mp4")
#   post = Post.create!({ 
#     title: post_names[i + 12], 
#     user_id: User.first.id + 1, 
#     password_protected: false,
#     description: generate_random_description(60),
#     duration: movie.duration,
#     bytes: bytes
#    })
#   post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4')), filename: 'final_video.mp4')
#   post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "thumbnail.png")), filename: 'thumbnail.png')
#   puts "#{i + 13}/26"
# end

# # This is the like section of the seeding data

# (0..6).each do |i|
#   (0...20).each do |j|
#     Like.create({ user_id: User.all[i].id, post_id: Post.all[j].id })
#   end
# end

# (7..12).each do |i|
#   (0...15).each do |j|
#     Like.create({ user_id: User.all[i].id, post_id: Post.all[j].id })
#   end
# end

# #This is the comments sections of the seeds file

# (0...26).each do |i|
#   Comment.create({
#     user_id: User.first.id, 
#     parent_comment_id: nil, 
#     child_comment_id: nil, 
#     post_id: Post.all[i].id, 
#     body: "This is your friendly neighborhood bot. Enjoy Bimeo, wash your hands, and stay at home :)!"
#   })
# end

# random_comment = rand(Comment.all.length - 5) + 4

# #This is the video_play section of the seeds file

# # VideoPlay.create({ user_id: 1, post_id: 1 })

# (0..20).each do |i|
#   (0..200).each do |j|
#     VideoPlay.create({ user_id: User.all[i].id, post_id: Post.all[i].id })
#   end
# end

# (0..20).each do |i|
#   (0..167).each do |j|
#     VideoPlay.create({ user_id: User.all[rand(18) + 1].id, post_id: Post.all[rand(19) + 1].id })
#   end
# end

# def generate_hashed_name(rand_string = generate_random_string(7))
#   puts rand_string
#   alpha = ("a".."z").to_a
#   sample = rand_string.split('')
#   hashed_username = []
#   i = 0
#   sample.each_with_index do |char, i|
#     mod = sample.length - 1 
#     modded = alpha.length % mod
#     if modded.odd?
#       hashed_username << alpha[modded * 2 + i]
#     else 
#       num = modded * 3 + i
#       if num > 10
#         hashed_username << num.to_s + alpha[num % 10]
#       else 
#         hashed_username << alpha[num]
#       end
#       i += 1 
#     end
#   end
#   return hashed_username.join('')
# end
#File names

file_name = [
  "beach",
  "bees",
  "blue-flame",
  "cali-ocean",
  "coffee-book",
  "coffee-breakfast",
  "cowboy-camping",
  "family-waterfall",
  "historic-beach",
  "home",
  "icecream",
  "italy",
  "keyboard",
  "mountains",
  "night-life",
  "palm-trees",
  "pasta",
  "people-waiting",
  "pizza",
  "santa",
  "solar-panels",
  "spine",
  "starry-night",
  "tahiti",
  "tour-city",
  "travel",
  "turkey",
  "video",
];

post_names = [
  "Beach",
  "Bees",
  "Blue Flame",
  "Cali Ocean",
  "Coffee Book",
  "Coffee Breakfast",
  "Cowboy Camping",
  "Family Waterfall",
  "Historic Beach",
  "Home",
  "Icecream",
  "Italy",
  "Keyboard",
  "Mountains",
  "Night Life",
  "Palm Trees",
  "Pasta",
  "People Waiting",
  "Pizza",
  "Santa",
  "Solar Panels",
  "Spine",
  "Starry Night",
  "Tahiti",
  "Tour City",
  "Travel",
  "Turkey",
  "Shores In The Distance",
];

durations = [
  12,
  15,
  14,
  9,
  10,
  8,
  8,
  8,
  5,
  11,
  2,
  7,
  10,
  7,
  6,
  4,
  5,
  7,
  11,
  5,
  10,
  18,
  4,
  5,
  7,
  8,
  11,
  15,
];

user_names = [
  "guest",
  "Bimeo Bot",
  "Louis Coppa",
  "The Team",
  "Creative Concept",
  "LA PLAYA",
  "Mike Seamor",
  "Launch Pad Productions",
  "XYZ WVU",
  "Backwards",
  "Video Guru",
  "Node",
  "React Awesome",
  "Redux Life",
  "OOP Programming",
  "Love Coding",
  "Live Session"
];

description = [
  "Garden rocket is a cool-weather green that likes rich, moist soil. This variety has a mild peppery and nutty flavor.  
   It is vigorous, germinates quickly and can be planted from early Spring to late Summer.  
   Holds well through the winter.    
   Great in salads and as a cooking green.",

  "A genovese-type basic with large aromatic leaves and a classic sweet basil taste.  
   A tender annual that likes shelter and warmth.  
   We start seeds in February and transplant to the greenhouse
   or a sunny protected spot with warm night time soil temperatures 
   when plants have two sets of true leaves.  
   Never water the leaves, and pinch off flower buds to promote maximum leaf growth.",

  "A great source of year round protein from the garden.
   Here is how we grow all of our varieties:   
   Direct-sow in May to mid June when the soil is 60 degrees.  
   Plant seed 2-4 inches apart and 1 inch deep in rows that are 18-24 inches apart.   
   Seed into moist warm soil but avoid irrigating until the starts have emerged.  
   If the soil is too cool AND wet they will rot.  
   Beans aren’t fond of water on their foliage,
   and we have a rule that we water at the roots and don’t handle beans when they are wet. 
   We plant beans as the first crop in any new bed that we develop.  
   I’m always tempted to put more compost on the beans but
   Steve discourages me…too much nitrogen results in more foliage and a poor pod set.  
   The roots of these plants are shallow so be careful weeding as they can be damaged easily.  
   Shallow roots also mean that watering should be regular during hot weather.  
   Harvest:  We allow the pods to dry on the vine to an almost leathery/papery stage. 
   We will remove the bean seed from the pod and give it an extra drying on a screen 
   old window screens can be used before storing in a sealed jar in a dry cool and dark place .",

  "A productive bush bean that produces a large, 
   nutty tasting dry bean.  It is a staple in the pantry.   
   The plants are 12-18 inches high and produce more than a dozen pods for drying.   
   Use in cooking when recipes call for a Black Turtle Bean.  
   We have selected our seed stock for healthy, disease resistant high yielding plants.",

  "This early maturing, Roma-type pole bean has a deliciously rich, sweet flavor. 
   The 8 foot long, 1 foot wide, flat green pods are stringless and stay tender for long periods. 
   Extra vigorous in the seedling stage with strong vine growth. white seeds.   
   Same growing instructions as our other beans.  
   We allow many of the pods to mature and eat the rich whole beans fresh.",

  "We acquired a handful of this heirloom at an Organic Seed Alliance seed swap in 2008.  
   It is prolific, growing 6-7 feet and producing maroon pods that 
   hold dark blue beans that can be eaten as a snap bean or dried.  
   The taste and cooking is similar to black beans.  
   If you are looking for a productive pole bean this is perfect!  
   Named for a site along the Delaware River,
   where it was grown by both Pennsylvania farmers and the Lenape natives.",

  "Steve’s brother has grown this bean in his SW Washington garden for years.  
   It is THE most striking bean we offer...a black and white pattern
   that is so beautiful  They are so beautiful that it is difficult to cook them.  
   Art in a pod!  It is not as dense as the black bean, but still as flavorful.  
   The color fades dramatically when cooked...as with most white and black, it turns to grey.",

  "We have been working for four years on improving this crop for NW gardens.
   Original seed was a strain of Envy from Territorial
   Seed and we have selected for pods containing three peas.  
   Boil whole pods and sprinkled with sea salt.  
   We should all be planting more of these nutritious beans.  
   The only source of organic edemame we have been able to find are grown in China.  
   Help us grow local.",

  "Original organic seed from Ed Hume in 2010 because
   I prefer cooking and pickling this shape of beet.
   It is easier to peel, cut, shred, juice and can.
   The roots are sweet, tender and will last into the winter.  
   Like other taproots, beets like a deep, moist and rich soil.  
   You can sew beets as early as April.  
   Plant about 1 seed per inch, about ½ inch deep in rows that are 12-16 inches apart.  
   Thin to 4 inches apart.  
   Will last into early winter.",

  "A rare open pollinated variety produces large
   sweet heads developed by Jim Myer at Oregon State University.   
   Steve has worked with this seed for years, selecting the plants 
   that have large sweet heads and resists bolting.   
   Every year it gets better!  We start our broccoli indoors in February.  
   When the starts have solid roots, we harden them off, 
   and transplant into the ground 12-24 inches apart.   
   Keep the soil uniformly moist.  
   After harvesting the first  head, 
   auxiliary buds will continue to produce smaller but just as tasty heads.  
   For a late fall and early winter harvest, sow seeds in mid July.  
   Plant the seeds half inch deep and keep the
   soil moist to help plants deal with the heat of late summer.",

  "Celery likes a rich and continuously wet soil so it can draw up large amounts of water.
   We sow indoors in March in flats and transplant when
   the soil temperature is above 60 degrees, planting about 12 inches apart.  
   Keep the plants well watered.  Harvest by picking individual stalks as needed.  
   This year our friend and farmer John Bellow grew 
   out a variety with red stems that is crunchy and sweet. ",

  "A great tasting cilantro.  
   We plant in early spring and every two weeks for continuous supply of fresh leaves.  
   Difficult to germinate in hot weather.  
   Sow in shade and keep cool until seedlings have emerged.  
   Great insectary plant as well if allowed to bloom. 
   Aphid eating syrphid flies love it.",
  
  "Developed for its hardiness, 
   earliness, and colorful display in the mountains of Montana.  
   This heirloom field corn has moved to the 
   Chimacum Valley and is grown for us by Linda Davis.  
   Multicolor ears for grinding into flour, making hominy grits or for just decorating.  
   4-5 foot stalks with 6 inch cobs that will mature in our NW climate.",

  "I plant this mammoth dill in the greenhouse in 
   the early spring and the seed heads are ready when the cucumbers have ripened.  
   We stagger several plantings because both the greens and the seed head is edible.  
   The foliage on this variety is a beautiful teal green, 
   and the seed heads are large and can be used in pickling and in bouquets.  
   The heads on dill will mature at different times, 
   requiring that you watch the plant and harvest continuously.  
   The heads will shatter seeds and self sow 
   if you aren’t careful...or it’s just a great way to always have dill.",

  "This cold hardy Chicory is a staple winter green for us.  
   The plant grows up to 12 inches across with 
   braod thick outer leaves enclosing a head that has milder leaves.  
   You can tie up the outer wrapper leaves and force a 
   blanching and sweetening of the inner leaves in about 2-3 weeks.    
   Sow seeds in the spring and again in mid July for fall and winter harvest.  
   The bitterness of the leaves will be reduced by frosts, 
   soaking in cold water or by cooking. ",

  "A highly savoyed kale with dark blue green leaves with a hearty, 
   nutty flavor that maintains its firm texture when cooked.   
   If I had one kale to pick it would be this one.  
   It makes GREAT kale chips and has more recipes on line than any other kale.  
   All that from a plant that grows into the winters in the Pacific Northwest.",

  "Similar to Red Russian Kale, 
   this variety has purple veins with green leaves.  
   Both the flavor and the color are rich.  
   It is hardy in Pacific NW winters and improves its flavor with cool weather.  
   It is a winter staple at Oatsplanter Farm...our favorite stir fry Kale.",
  
  "We sow seed indoors in flats starting in February, 
   let them harden off by April and begin transplanting 
   into the garden when they are about 4 inches tall.  
   Leeks have shallow root systems and grow 
   best when they are in well-drained, 
   fertile soil with good moisture retention.  
   We transplant our leeks 2 inches deep and about 6 inches apart.  
   Leeks last through the winter in the ground and 
   stay tender until the spring when they begin to bolt.  
   Cut lengthwise and wash well before cooking, 
   the tight leaves can hold soil.",

  "We start all our lettuce in flats indoors in mid March, 
   sowing seed about 1/8 deep.  
   It is a cool-season crop that grows best at 60-70 degrees.  
   By April they can be transplanted into the garden.  
   We will also direct-seed into the garden in March and 
   April for a harvest of small salad greens as we thin.   
   Mature heads of lettuce will need about 8 inches between plants.  
   Try planting seed every three weeks until the temperatures are near 70 degrees.  
   This will give you a continuous supply until the heat of 
   summer closes the growing window.   
   Lettuce likes full sun and average water.   
   When they begin to bolt and go to seed, 
   the leaves will become bitter…you’ll 
   notice the white sap increase in the leaves this time of year.",

  "Our selection for this year is a 
   butterhead lettuce we originally got from 
   our friend Frank Morton of Wild Garden Seed  
   Medium heads, tender leaves and a buttery texture.  
   It has adapted well to our maritime climate and is the sweetest lettuce I’ve grow here.
   Pictured at the top of photo",

  "A classic romaine with dark green crisp leaves.  
   What makes this romaine different is a touch of 
   tenderness in the leaves from a butterhead influence.  
   The heads grow to 10 inches, are tightly layered and very heat tolerant.  
   This all season lettuce requires cool temperatures for germination. ",

  "This red-tinged lettuce forms heads that can be 10 inches across.  
   Tolerates cool soils so it can be sewn early and enjoyed in the spring.  
   Direct seed after first frost, planting every 2-3 weeks until the heat of summer.  
   Replant again in late summer/early fall.  
   Will tolerate moderate frosts and provide greens into early winter.  
   Great taste in this butterhead heirloom variety. ",

  "A mild Japanese mustard with delicate frilly leaves.  
   This cool weather crop shares the cultural 
   requirements with other members of the brassica family.  
   Plant in early spring and again in late summer for a winter harvest.   
   This hardy green sweetens with the cool winters of the Pacific Northwest.  
   Very prolific and visually beautiful mounding plants. 
   An essential part of any baby salad mix and a stand 
   alone vegetable for braising and stir fries",

  "This unique emerald and garnet leaf mountain spinach
   is excellent green for salads and cooking.  
   It likes a rich soil and full sun, and can tolerate more warmth than spinach.  
   The leaves are heart shaped and can be picked when the 
   plant is young to eat fresh, or to steam/sauté as the plant matures.  
   When mature it bears a flower stalk that is striking in bouquets. 
   We direct-sow seeds the end of March and continue through mid June to stagger the harvest.",

  "We direct-seed in April.  
   Like carrots, parsnips like deep soil and full sun.  
   We plant seeds ½ inch deep and thin plants to 2-3 inches apart.  
   They require a full season to grow, and their flavor improves with cooler temperatures.  
   The sweetest roots can be dug after the fall frosts.  
   Parsnips will over-winter, 
   but in spring as the weather warms any parsnips left in the ground will become woody.",

  "Plant peas in late February to April.  
   Peas can tolerate cooler soils but like the soil to be well drained.  
   They are good soil builders and excellent for 
   following heavy feeders in the garden rotation.  
   Plant 1 inch deep and 2 inches apart. Our trellis is 6 feet high to hold these climbers.  
   The pods are sweet and crisp and at their peak 
   when some seed development has occurred.  
   They remain sweet as they fatten.  
   For the pods that escape being eaten when they are smaller, 
   you can allow them to get large enough for shelling.  
   They become a bit too starchy for raw eating, 
   but are wonderful blanched or steamed.  
   Always use two hands when picking pea pods to keep the stalks from breaking. ",

  "A sweet fleshy pepper that is our substitute for the classic bell.  
   Crunchy, flavorful and prolific.  
   Use fresh or dry for use during the winter months.  
   We start seeds in flats in February and transplant 
   to the greenhouse in mid April when the soil temperature is about 60 degrees. ",

  "Hanako and Marko have selected 
   for winter hardiness in our region and resistance to bottom rot. 
   Grows best when sown in early July for harvest in late fall and winter. 
   Smaller plants will overwinter and produce 
   good edible regrowth in the early spring.  
   May also be grown for baby cut leaf production in the early Spring.",

  "BIG, old-fashioned favorite with large heart-shaped 
   red fruit that can weigh up to 1 pound. Meaty flesh with few seeds 
   makes this a favorite for slicing and sauces. 
   Good flavor and productivity keep gardeners growing this heirloom variety.",

  "This early tomato is always the first of the summer to ripen.  
   Their sweetness taste is wonderful off the vine.   
   It is an easy to grow plant that is cold tolerant.  
   2 inch fruits are red and slightly oval.  
   Pumps out fruit for the entire season.  
   Indeterminate potato leaf variety.  ",

  "I got these seeds from my friend Micaela Coley 
   of the Organic Seed Alliance.  
   Her flower garden contains collections 
   from her days at Seeds of Change and gives us all flower envy.  
   This member of the mint family adds beauty and the sweet smell 
   of mint and licorice to the garden.  
   The spiky violet blooms are longstanding and attract bees, 
   butterflies and hummingbirds. It will can sow if seeds are allowed to develop and drop.   
   Both the leaves and flowers can be used in teas and salads.  
   The buzz around the Hyssop will help maintain our native pollinator populations.",

  "This wild marigold from Oaxaca is grown to honor 
   the Aztecs in the Day of the Dead Festival.  
   It grows 3 to 5 feet high with numerous blossoms.  
   Direct seed when soil is warm, or start 
   seedlings inside a month before last frost.  
   Sunny location.  
   Dead head for continuous blossoms.  
   Marigolds are  important companion plants all over the garden.",

  "Intensely fragrant, 
   multi-color mixture of solid and striped blossoms.  
   Grows 5-6 feet and requires support of teepees or trellis.  
   Original seed from England.  Full sun, moist, well drained, fertile soil.   
   Plant directly, one inch deep in a furrow, placing seeds 2-3 inches apart.  
   When plants have 3-4 pairs of leaves thin rows to 5-6 inches apart.   
   This will improve circulation and plant growth.  
   Provide support as they grow, be gentle when picking, 
   and deadhead to encourage continued blooming.",

   "a",

   "b",

   "c",

   "d",

   "e",

   "f"
];

VideoPlay.destroy_all
Follower.destroy_all
Like.destroy_all
Comment.destroy_all
Post.destroy_all
User.destroy_all

MEGABYTES = 1024.0 * 1024.0
def bytes_to_megabytes (bytes)
    bytes / MEGABYTES
end

# This is the user sections of the seed file
(0...user_names.length).each do |i| 
  User.create({ 
    username: user_names[i], 
    email: user_names[i].split(' ').join(' ') + "@gmail.com",
    password: '0987654321'
  })
end

random_user = rand(User.all.length - 10) + 8


#This is the post sections of the seed file
(0...file_name.length).each do |i|
  
  # File size for posts
  size = File.size(Rails.root.join('lib', 'seeds', 'production_videos', "#{file_name[i]}.mp4"))
  bytes = bytes_to_megabytes(size).to_f.round

  post = Post.create!({ 
    title: post_names[i], 
    user_id: User.all[rand(User.all.length - 1)].id, 
    password_protected: false,
    description: description[i],
    duration: durations[i],
    bytes: bytes
  })

  post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'production_videos', "#{file_name[i]}.mp4")), filename: "#{file_name[i]}.mp4")
  post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'production_thumbnails', "#{file_name[i]}.png")), filename: "#{file_name[i]}.png")
end

random_post = rand(Post.all.length - 10) + 8

#This is the Follows section of the seeds file

# ----------------Follower.create({ user_id: User.all[random_user].id, follower_id: User.all[random_user].id })

(4..10).each do |i|
  leaderUser = User.all[i]
  Follower.create({ user_id: leaderUser.id, follower_id: User.all[2].id })
end

(7..15).each do |i|
  leaderUser = User.all[i]
  Follower.create({ user_id: leaderUser.id, follower_id: User.all[3].id })
end

# Attaches a video url to a post. This is how we would open a file and attach 
# It to the state of an object on the backend



# counter = 0
# Post.all.each do |post|
#   counter = 0 if counter == 4
#   puts counter

#   post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[counter]}")), filename: mp4_file[counter])
#   post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "#{thumbnails[counter]}")), filename: thumbnails[counter])
#   counter += 1 
# end

# (0..12).each do |i|
#   # File size for posts 
#   size = File.size("/Users/tarik/Desktop/videos/final_video.mp4")
#   bytes = bytes_to_megabytes(size).to_f.round
#   # movie = FFMPEG::Movie.new(File.read(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4')))
#   # movie = FFMPEG::Movie.new(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4'))
#   movie = FFMPEG::Movie.new("/Users/tarik/Desktop/videos/final_video.mp4")
#   post = Post.create!({ 
#     title: post_names[i + 12], 
#     user_id: User.first.id + 1, 
#     password_protected: false,
#     description: generate_random_description(60),
#     duration: movie.duration,
#     bytes: bytes
#    })
#   post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4')), filename: 'final_video.mp4')
#   post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "thumbnail.png")), filename: 'thumbnail.png')
#   puts "#{i + 13}/26"
# end

# This is the like section of the seeding data

(0..6).each do |i|
  (0...20).each do |j|
    Like.create({ user_id: User.all[i].id, post_id: Post.all[j].id })
  end
end

(7..12).each do |i|
  (0...15).each do |j|
    Like.create({ user_id: User.all[i].id, post_id: Post.all[j].id })
  end
end

#This is the comments sections of the seeds file

(0...Post.all.length - 1).each do |i|
  Comment.create({
    user_id: User.first.id + 1, 
    parent_comment_id: nil, 
    child_comment_id: nil, 
    post_id: Post.all[i].id, 
    body: "This is your friendly neighborhood bot. Enjoy Bimeo, wash your hands, and stay at home :)!"
  })
end

random_comment = rand(Comment.all.length - 5) + 4

#This is the video_play section of the seeds file

# VideoPlay.create({ user_id: 1, post_id: 1 })

(0..13).each do |i|
  (0..100).each do |j|
    VideoPlay.create({ user_id: User.all[i].id, post_id: Post.all[i].id })
  end
end

(0..13).each do |i|
  (0..67).each do |j|
    VideoPlay.create({ user_id: User.all[i].id, post_id: Post.all[i].id })
  end
end