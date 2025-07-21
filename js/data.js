// --- DATA SECTION ---
const practiceData = {
    "Business": {
        "Part 1": [
            { question: "What is your hobby?", suggestion: "<b>Câu mẫu:</b> I love playing sports." },
            { question: "What is your favorite food?", suggestion: "<b>Câu mẫu:</b> I like seafood." },
            { question: "What is your favorite time of a day?", suggestion: "<b>Câu mẫu:</b> I love mornings." },
            { question: "How do you get to work?", suggestion: "<b>Câu mẫu:</b> I drive to work." },
            { question: "Where are you from?", suggestion: "<b>Câu mẫu:</b> I am from Vietnam." }
        ],
        "Part 2": [
            { question: "Where do you usually go shopping?", suggestion: "<b>Cấu trúc:</b> I often go shopping in a supermarket where...<br><b>Từ vựng:</b> good products, low prices, discounts.<br><b>Câu mẫu:</b> I often go shopping in a supermarket where I can buy a lot of good products with low prices and discounts." }
        ],
        "Part 3": [
            { question: "Tell me about a successful small business in your area.", suggestion: "<b>Cấu trúc:</b> In my hometown, there's a café which is small but successful. They sell...<br><b>Từ vựng:</b> great drinks, homemade cakes, delicious, fresh, relax, busy.<br><b>Câu mẫu:</b> In my hometown, there's a café which is small but successful. They sell great drinks and homemade cakes which are really delicious and fresh. Many people go there to relax or work, and it's always busy." },
            { question: "I have a friend who wants to open a second coffee shop. What advice do you have?", suggestion: "<b>Cấu trúc:</b> It is important for her to... It's a good idea for her to...<br><b>Từ vựng:</b> choose the location, busy place, ask for feedback.<br><b>Câu mẫu:</b> It is important for her to choose the location for the coffee shop. It must be located in a busy place. It's a good idea for her to ask for feedback from current customers to know what she should do." },
            { question: "What qualities and skills are needed to create a successful small business?", suggestion: "<b>Cấu trúc:</b> To run a successful small business, people need to be... They must have...<br><b>Từ vựng:</b> hard-working, reliable, good products, strong communication, leadership skills.<br><b>Câu mẫu:</b> To run a successful small business, people need to be hard-working and reliable. They must offer good products or services. Also, they must have strong communication and leadership skills." }
        ],
        "Part 4": {
            scenario: "Currently our club is planning to support local individuals who want to start up a small business. The club has 2 proposals: First, create a call center where customers can call to ask questions and request help. Second, create free courses to support local universities nearby. Let us know which option you would use and why.",
            friend_email: {
                prompt: "Write a letter to a friend about your choice and the idea. (50 words)",
                suggestion: "<b>Mở đầu:</b> Chào hỏi thân mật (Hi Jane,).<br><b>Nội dung chính:</b> Thông báo về kế hoạch của CLB. Nêu lựa chọn của bạn (call center) và lý do ngắn gọn (nhanh và trực tiếp). Hỏi ý kiến bạn mình.<br><b>Kết thúc:</b> Hẹn gặp lại (Let's talk about it..., See you later).",
                sample: "Hi Jane,\n\nDid you know that our club is going to support people who want to start up a small business? Of the two options in the email, I think we should choose to create a call center because it can help people more quickly and directly. What do you think? Let's talk about it after lunch.\n\nSee you later."
            },
            manager_email: {
                prompt: "Write a letter to the club manager about your choice and why. (120 - 150 words)",
                suggestion: "<b>Mở đầu:</b> Chào hỏi trang trọng (Dear Manager,). Giới thiệu bản thân (My name is...). Nêu mục đích viết thư (I am writing this email regarding...).<br><b>Thân bài:</b> Bày tỏ sự ủng hộ. Nêu rõ lựa chọn của bạn (a call center). Đưa ra lý do chi tiết (support more quickly and directly, not all people go to universities).<br><b>Kết bài:</b> Bày tỏ hy vọng (Hopefully, these ideas will be helpful...). Ký tên trang trọng (Best regards,).",
                sample: "Dear Manager,\n\nMy name is Mary. I have been an active member of the club for the last six years. I am writing this email regarding the upcoming plan mentioned in the recent announcement from the club.\n\nI have been informed that our club is going to support local people who would like to start up a small business and we have two options including creating a call center and offering free courses for local universities. Between the two options, I believe that a call center is the best choice for some reasons. First, it can support local individuals more quickly and directly because there are a lot of things they have to do and they need quick answers. Second, not all local people go to universities to learn this course as it takes time. Therefore, a call center is the most suitable option.\n\nHopefully, these ideas will be helpful to the club.\n\nBest regards,"
            }
        }
    },
    "Nature": {
        "Part 1": [
            { question: "What language do you speak?", suggestion: "<b>Câu mẫu:</b> I speak Vietnamese." },
            { question: "What's your favourite animal?", suggestion: "<b>Câu mẫu:</b> I love cats." },
            { question: "What do you like doing in the evening?", suggestion: "<b>Câu mẫu:</b> I enjoy watching TV." },
            { question: "How often do you go shopping?", suggestion: "<b>Câu mẫu:</b> Twice a week." },
            { question: "When was the last time you went out?", suggestion: "<b>Câu mẫu:</b> It was last Sunday." }
        ],
        "Part 2": [
            { question: "Please tell me about your free time and hobbies.", suggestion: "<b>Cấu trúc:</b> I enjoy [verb-ing]. I often... It helps me...<br><b>Từ vựng:</b> playing sports, play soccer, with my friends, at the weekend, fun, helpful, relax, improve my health.<br><b>Câu mẫu:</b> I enjoy playing sports. I often play soccer with my friends at the weekend. It's fun and helpful. It helps me relax and improve my health. Besides, it allows me to keep fit." }
        ],
        "Part 3": [
            { question: "Where do you like to visit?", suggestion: "<b>Cấu trúc:</b> I like to visit [place]. It's famous for...<br><b>Từ vựng:</b> Halong Bay, popular travel destination, beautiful, islands, mountains, caves.<br><b>Câu mẫu:</b> I like to visit Halong Bay. It's the most popular travel destination in Vietnam. It's beautiful with islands, mountains and caves. Here we can do a lot of interesting things like swimming in the sea, climb the mountains and visit some caves." },
            { question: "Why did you decide to join the club?", suggestion: "<b>Cấu trúc:</b> I decided to join because I love... and I would like to...<br><b>Từ vựng:</b> love nature, meet people, same hobby, share experiences.<br><b>Câu mẫu:</b> I decided to take part in the club because I love the beauty of nature and I would like to meet people who have the same hobby. I think we can share a lot of experiences with them." },
            { question: "The bigger the club, the more environmentally conscious people are, right?", suggestion: "<b>Cấu trúc:</b> It is true that... Nowadays, more and more people are becoming interested in...<br><b>Từ vựng:</b> environmentally conscious, interested in the environment, directly affects our life.<br><b>Câu mẫu:</b> It is true that the bigger the club, the more environmentally conscious people are. Nowadays, more and more people are becoming interested in the environment because it directly affects our life." }
        ],
        "Part 4": {
            scenario: "The club is planning to encourage young people to spend more time outdoors instead of staying at home and playing games.",
            friend_email: {
                prompt: "Write a letter to your friend about your feelings and suggestions (50 words).",
                suggestion: "<b>Mở đầu:</b> Chào hỏi (Hi Jane,).<br><b>Nội dung:</b> Bày tỏ sự vui mừng về kế hoạch (I'm happy to hear that). Đưa ra gợi ý (Do you think we should design some interesting activities such as...?).<br><b>Kết thúc:</b> Hẹn bàn bạc (Let's talk about it...).",
                sample: "Hi Jane,\n\nIt's me, Mary. Did you know that our club is going to encourage young people to spend more time outdoors? I'm happy to hear that. This plan is really useful for them. Do you think we should design some interesting activities such as camping or playing sports? Let's talk about it after lunch.\n\nCatch you later."
            },
            manager_email: {
                prompt: "Write a letter to the manager about your feelings and suggestions (120 – 150 words).",
                suggestion: "<b>Mở đầu:</b> Giới thiệu bản thân và mục đích viết thư.<br><b>Thân bài:</b> Bày tỏ sự phấn khích (I am so excited to hear that...). Đưa ra các gợi ý cụ thể (It is advisable for us to design some interesting outdoor activities like...; I suggest organizing some sports events...). Giải thích lợi ích của các hoạt động đó (improve communication skills, social interaction).<br><b>Kết bài:</b> Bày tỏ hy vọng và ký tên.",
                sample: "Dear Manager,\n\nMy name is Mary. I have been an active member of the club for the last two months. I am writing this email in response to the latest announcement from the club.\n\nI have been informed that our club is planning to encourage young people to spend more time outdoors. Honestly, I am so excited to hear that because this plan is really useful for them.\n\nBeing a member of the club, I would like to offer some ideas. It is advisable for us to design some interesting outdoor activities which are good for them and the community such as cleaning the street or planting trees. Besides, I suggest organizing some sports events or contests with prizes. These activities can help them improve their communication skills or social interaction.\n\nI hope that my ideas will be useful for our club.\n\nBest regards,"
            }
        }
    },
    "Outdoor": {
        "Part 1": [
            { question: "Who do you like spending time with?", suggestion: "<b>Câu mẫu:</b> My friends." },
            { question: "What did you do yesterday?", suggestion: "<b>Câu mẫu:</b> I stayed at home." },
            { question: "What's your favourite TV program?", suggestion: "<b>Câu mẫu:</b> I love watching movies." },
            { question: "Where do you live?", suggestion: "<b>Câu mẫu:</b> In Vietnam." },
            { question: "Do you like taking photos?", suggestion: "<b>Câu mẫu:</b> Yes, I do." }
        ],
        "Part 2": [
            { question: "Which outdoor activities do you like?", suggestion: "<b>Cấu trúc:</b> I like doing... I often... It's really useful because...<br><b>Từ vựng:</b> morning exercise, in the park, get up early, go jogging, fresh air, improve my health.<br><b>Câu mẫu:</b> I like doing morning exercise in the park. I often get up early and go jogging there. It's really useful because I can enjoy fresh air and improve my health." }
        ],
        "Part 3": [
            { question: "Tell me about outdoor activities in bad weather.", suggestion: "<b>Gợi ý:</b> Bạn có thể nói về các hoạt động trong nhà thay thế, hoặc các hoạt động ngoài trời vẫn có thể làm được nếu có trang bị phù hợp (ví dụ: chạy bộ dưới mưa với áo mưa chuyên dụng)." },
            { question: "Please give me your ideas and advice for hiking.", suggestion: "<b>Cấu trúc:</b> Hiking is... It allows people to...<br><b>Từ vựng:</b> fun, helpful, relax, reduce stress, kind of exercise, good for health.<br><b>Câu mẫu:</b> Hiking is fun and helpful. It allows people to relax and reduce stress after hard-working days. Also, it is a kind of exercise which is good for people's health." },
            { question: "What are the most popular outdoor activities in your country?", suggestion: "<b>Cấu trúc:</b> In my country, the most popular ones are... They can spend hours...<br><b>Từ vựng:</b> doing exercise, doing the gardening, in the gardens, in the parks.<br><b>Câu mẫu:</b> In my country, there are many outdoor activities and the most popular ones are doing exercise and doing the gardening. They can spend hours in the gardens or in the parks." }
        ],
        "Part 4": {
            scenario: "The club is going to organise a trip in the summer. Do you want to go mountains or the coast? Please give me suggestions for both young and old people.",
            friend_email: {
                prompt: "Write an email to your friend to show your feelings and what you would like to do (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự vui mừng (I'm so happy...). Nêu lựa chọn của bạn (I think we should go to the mountains). Đưa ra lý do ngắn gọn (This can attract both young and old people).",
                sample: "Hi Jane,\n\nIt's me, Mary. Did you know that our club is planning to organize a trip in the summer? I'm so happy to hear that. I think we should go to the mountains. This can attract both young and old people. What do you think? Let's talk about it after lunch.\n\nCatch you later."
            },
            manager_email: {
                prompt: "Write an email to the manager of the club to show your feelings and recommendation about this situation (120-150 words).",
                suggestion: "<b>Thân bài:</b> Bày tỏ sự hào hứng (this news thrilled me). Đề xuất một địa điểm cụ thể (go to Halong Bay). Đưa ra lý do tại sao nó phù hợp cho cả người trẻ và người già (For young people, they can... For old people, they can...).",
                sample: "Dear Manager,\n\nMy name is Mary. I have been a dedicated member of the club for the last two months. I am writing this email regarding the upcoming trip.\n\nI have been informed that our club is planning to organize a trip in the summer. Frankly, this news thrilled me because I have been waiting for this trip for months.\n\nTo attract both young and old people to join the trip, it is advisable for us to go to Halong Bay for some reasons. First, Halong Bay is really beautiful with mountains, islands and caves. It is the most popular travel destination in Vietnam. Second, there we can design many activities which are suitable for people of all ages. For young people, they can swim in the sea, climb the mountain or explore the nature. For old people, they can enjoy the beauty of the nature from boats or go sightseeing.\n\nHopefully, my ideas will be helpful to our club.\n\nBest regards."
            }
        }
    },
    "Fashion": {
        "Part 1": [
            { question: "What are you wearing today?", suggestion: "<b>Câu mẫu:</b> I am wearing a dress / a T-shirt and jeans." },
            { question: "How many people are there in your family?", suggestion: "<b>Câu mẫu:</b> 4 people / Four people." },
            { question: "What did you do yesterday?", suggestion: "<b>Câu mẫu:</b> I stayed at home." },
            { question: "How do you go to school?", suggestion: "<b>Câu mẫu:</b> By car. / I drive to school." },
            { question: "What's your hobby?", suggestion: "<b>Câu mẫu:</b> I like reading books." }
        ],
        "Part 2": [
            { question: "When was the last time you went shopping for clothes?", suggestion: "<b>Cấu trúc:</b> The last time I went shopping for clothes was... I bought...<br><b>Câu mẫu:</b> Last week I bought a sweater and jacket from a shop near my house. They were fashionable and stylish." }
        ],
        "Part 3": [
            { question: "Some people prefer to buy online. How do you like it and why?", suggestion: "<b>Cấu trúc:</b> I prefer buying clothes online for some reasons. First,... Second,...<br><b>Câu mẫu:</b> I prefer buying clothes online for some reasons. First, it is more convenient as I don't have to go to stores so I can save a lot of time. Second, I can buy things at low prices with discounts or vouchers." },
            { question: "Why did you decide to join the club?", suggestion: "<b>Cấu trúc:</b> I decided to join the club because...<br><b>Câu mẫu:</b> I decided to join the club because I love fashion and I want to meet people who share my hobby. I think I can learn a lot of things from them." },
            { question: "Why do people like fashion?", suggestion: "<b>Cấu trúc:</b> People are interested in fashion because...<br><b>Câu mẫu:</b> People like fashion because it can make them more beautiful and confident. Besides, it can show their personalities and creativity." }
        ],
        "Part 4": {
            scenario: "The club is planning to hold meetings with famous designers. Some suggest it should be held online while others want a fashion show-style event.",
            friend_email: {
                prompt: "Write to a friend to express which way of organisation you prefer (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng (I am so excited...). Nêu lựa chọn (I think we should hold meetings online...) và lý do ngắn gọn (it is convenient).",
                sample: "Hi Jane,\n\nIt's me, Mary. Did you know that our club is going to have a meeting with well-known designers? I am so excited to hear that. It's advisable for us to have the meeting online because it's more convenient for designers and members. What's your take on it? Let's discuss it over lunch.\n\nCatch you later."
            },
            manager_email: {
                prompt: "Write to the manager to express which way you prefer and explain (120 – 150 words).",
                suggestion: "<b>Thân bài:</b> Nêu lựa chọn (It is advisable for us to have the meeting online). Đưa ra lý do chi tiết (more convenient for everyone, especially designers from other countries; more economical, save costs).",
                sample: "Dear Manager,\n\nMy name is Mary. I have been an active member of the club for the last 6 months. I am writing this email regarding the upcoming meeting mentioned in the recent announcement from the club.\n\nI have been informed that our club is going to have a meeting with well-known designers. Frankly, this news thrilled me because I have been eagerly waiting for the event for a long time.\n\nBeing a member of the club, I would like to offer several ideas. It is advisable for us to have the meeting online for some reasons. First, it is more convenient for everyone, especially the designers who come from other countries. Second, it is more economical for us because we do not have to spend money travelling. Therefore, we can save costs for other things.\n\nHopefully, my ideas will be somewhat helpful to our club.\n\nBest regards,"
            }
        }
    },
    "Community": {
        "Part 1": [
            { question: "What's the weather like today?", suggestion: "<b>Câu mẫu:</b> It's sunny and warm." },
            { question: "What do you usually do in the evening?", suggestion: "<b>Câu mẫu:</b> I usually read books." },
            { question: "Where would you like to live?", suggestion: "<b>Câu mẫu:</b> I'd like to live by the sea." },
            { question: "Which season of the year do you like?", suggestion: "<b>Câu mẫu:</b> I like autumn." },
            { question: "Where do you like to go in the summer?", suggestion: "<b>Câu mẫu:</b> I like going to the beach." }
        ],
        "Part 2": [
            { question: "Why did you decide to join the club?", suggestion: "<b>Gợi ý:</b> Nói về mong muốn đóng góp cho cộng đồng, giúp đỡ người khác, và gặp gỡ những người cùng chí hướng." }
        ],
        "Part 3": [
            { question: "My friend wants to go to the hair salon, but her car isn't working. Can you suggest some ways for her to get there?", suggestion: "<b>Gợi ý:</b> Đề xuất các phương tiện công cộng (bus, train), dịch vụ gọi xe (Grab, Gojek), hoặc đề nghị giúp đỡ (I can give her a ride)." },
            { question: "Volunteering provides great learning opportunities and helps others a lot. Do you agree with this?", suggestion: "<b>Cấu trúc:</b> I completely agree. Volunteering helps us to learn... and it's a great way to...<br><b>Từ vựng:</b> new skills, teamwork, communication, give back to the community." },
            { question: "Do you agree with the view that volunteering is the form of learning, especially for young people. Why?", suggestion: "<b>Cấu trúc:</b> Yes, I agree. For young people, volunteering is a practical way to learn...<br><b>Từ vựng:</b> practical skills, responsibility, empathy, understand social issues." }
        ],
        "Part 4": {
            scenario: "Our club needs support with several tasks this year. First, we need more members who can actively participate in our ongoing projects. Second, we are looking for creative ideas to develop new activities. Could you share some suggestions with us?",
            friend_email: {
                prompt: "Write an email to your friend. Write about your feelings and what you would like to do (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng (I feel excited about this). Đưa ra một vài ý tưởng nhanh (we should have a look at the background of members...; some small prizes for great ideas).",
                sample: "Hi Jane,\n\nHow's it going? Have you got the latest email from our community club asking for support? Got any new ideas? I feel excited about this. Do you think we should have a look at the background of members to see what they can help? Also, there should be some small prizes for those with great ideas to encourage them. What do you think? Let's talk about it after lunch.\n\nCatch you later,"
            },
            manager_email: {
                prompt: "Write an email to the manager of the club. Write about your feelings and what you would like to do (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra các gợi ý cụ thể. Gợi ý 1: Tổ chức hoạt động để thu hút thành viên mới (organize monthly outdoor activities). Gợi ý 2: Cách để tìm người hỗ trợ dự án (look at the background of the members to know who can help).",
                sample: "Dear Manager,\n\nMy name is Mary. I have been an active member of the club for the last two years. I am writing this email in response to the latest announcement from our club.\n\nI have been informed that our club need support from members with several tasks including ongoing projects and creative ideas to develop new activities. I am so excited about this.\n\nBeing a member of the club, I would like to offer some ideas. We could organize monthly outdoor activities to bring members together and attract new people. These activities not only improve our image but also improve the relationship between members. It is advisable for us to look at the background of the members to know who can help the ongoing projects.\n\nI hope my ideas will be helpful to our club.\n\nBest regards,"
            }
        }
    },
    "Car": {
        "Part 1": [
            { question: "Do you have a car?", suggestion: "<b>Câu mẫu:</b> Yes, I have a small car." },
            { question: "How do you go to work?", suggestion: "<b>Câu mẫu:</b> I drive to work." },
            { question: "What color is your car?", suggestion: "<b>Câu mẫu:</b> It's white." },
            { question: "When did you get your driver's license?", suggestion: "<b>Câu mẫu:</b> Two years ago." },
            { question: "Do you like driving?", suggestion: "<b>Câu mẫu:</b> Yes, I enjoy driving." }
        ],
        "Part 2": [
            { question: "Tell me about your experience with cars.", suggestion: "<b>Cấu trúc:</b> I have been driving for... My car is... It helps me...<br><b>Từ vựng:</b> reliable, convenient, travel to work, visit friends, comfortable.<br><b>Câu mẫu:</b> I have been driving for 3 years. My car is reliable and convenient. It helps me travel to work easily and visit friends. The car makes my life more comfortable." }
        ],
        "Part 3": [
            { question: "What are the advantages and disadvantages of having a car?", suggestion: "<b>Cấu trúc:</b> Having a car has both advantages and disadvantages. On one hand... On the other hand...<br><b>Từ vựng:</b> convenient, independence, expensive, maintenance, traffic jams, pollution.<br><b>Câu mẫu:</b> Having a car has both advantages and disadvantages. On one hand, it gives you convenience and independence to travel anywhere. On the other hand, it's expensive to buy and maintain, and cars contribute to traffic jams and pollution." },
            { question: "Do you think electric cars are the future?", suggestion: "<b>Cấu trúc:</b> I believe electric cars are the future because... They are...<br><b>Từ vựng:</b> environmentally friendly, reduce pollution, save money on fuel, quiet, advanced technology.<br><b>Câu mẫu:</b> I believe electric cars are the future because they are environmentally friendly and help reduce air pollution. They also save money on fuel and are much quieter than traditional cars." },
            { question: "Should there be more restrictions on car use in cities?", suggestion: "<b>Cấu trúc:</b> I think there should be some restrictions because... However, we also need to...<br><b>Từ vựng:</b> reduce traffic congestion, improve air quality, public transportation, alternative solutions.<br><b>Câu mẫu:</b> I think there should be some restrictions because they can help reduce traffic congestion and improve air quality. However, we also need to improve public transportation and provide alternative solutions for people." }
        ],
        "Part 4": {
            scenario: "There will be a car program taking place across Europe. The program invites the car club to nominate two representatives – one as the main driver and the other as a passenger – both of whom must possess strong driving skills. Do you have any suggestions for these positions?",
            friend_email: {
                prompt: "Write an email to your friend about your feelings and what you would like to do (50 words).",
                suggestion: "<b>Nội dung:</b> Báo tin (Did you know that...). Bày tỏ sự hào hứng (I am so excited...). Tự đề cử bản thân và bạn mình (I believe that we can be the best choices...).",
                sample: "Hi Jane,\n\nDid you know that there will be a car program happening across Europe and the organizers are looking for two representatives from our club? I am so excited to hear this news. With our excellent driving skills, I believe that we can be the best choices for the two positions. What do you think? I'm writing to the manager to express my idea.\n\nBye."
            },
            manager_email: {
                prompt: "Write an email to the manager of the club (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra tiêu chí lựa chọn (good drivers, work well together, experience, focus, confidence, navigation skills). Đề cử người cụ thể và nêu lý do (I would like to suggest Mr. John as the main driver. He has... For the passenger role, I highly recommend Mr. David because...).",
                sample: "Dear Manager,\n\nMy name is Jane. I have been an active member of the club for the last two years. I am writing this email regarding the upcoming program.\n\nI have been informed that there will be a car program happening across Europe and the organizers are looking for two representatives. To be honest, I am so excited to hear that news because this is a great opportunity for our club.\n\nBeing a member of the club, I would like to offer some ideas. I think we should choose members who are good drivers and can work well together. The main driver should have experience, focus, and confidence on the road. The passenger should be someone who can help with navigation and support the driver during the program.\n\nI would like to suggest Mr. John as the main driver. He has great driving skills and a lot of experience. For the passenger role, I highly recommend Mr. David because he is good at navigation and staying calm under pressure.\n\nHopefully, my ideas will be helpful to our club.\n\nBest regards,"
            }
        }
    },
    "Technology": {
        "Part 1": [
            { question: "Where are you from?", suggestion: "<b>Câu mẫu:</b> I'm from Vietnam." },
            { question: "What's the weather like today?", suggestion: "<b>Câu mẫu:</b> It's hot and humid." },
            { question: "What do you do in your free time?", suggestion: "<b>Câu mẫu:</b> I listen to music." },
            { question: "What is your first language?", suggestion: "<b>Câu mẫu:</b> My first language is Vietnamese." },
            { question: "Who do you usually go to the movies with?", suggestion: "<b>Câu mẫu:</b> With my friends." }
        ],
        "Part 2": [
            { question: "What do you usually use your laptop for?", suggestion: "<b>Cấu trúc:</b> I usually use my laptop to... Sometimes, I use it to...<br><b>Từ vựng:</b> learn online, watch movies, send emails, search for information, chat with friends.<br><b>Câu mẫu:</b> I usually use my laptop to learn online, watch movies on Youtube or send emails to my teachers or friends. Sometimes, I use it to search for information and chat with my friends." }
        ],
        "Part 3": [
            { question: "Do you often watch movies on your laptop or go to the theater?", suggestion: "<b>Cấu trúc:</b> I prefer to watch movies on my laptop because... Also, it helps me...<br><b>Từ vựng:</b> watch at home, do not have to go out, relaxing, convenient, save a lot of money.<br><b>Câu mẫu:</b> I prefer to watch movies on my laptop because I can watch at home. I do not have to go out. It's more relaxing and convenient. Also, it helps me save a lot of money in comparison with going to the theatre." },
            { question: "Please give your opinion on watching a movie at the cinema.", suggestion: "<b>Cấu trúc:</b> However, watching a movie at the cinema is much more interesting as...<br><b>Từ vựng:</b> best films, large screen, wonderful sound system.<br><b>Câu mẫu:</b> However, watching a movie at the cinema is much more interesting as we can see the best films in the world and on a large screen with a wonderful sound system." }
        ],
        "Part 4": {
            scenario: "Members often post on the club's website. But lately there have been a few negative comments on other members' posts. Please give your opinion to fix the situation.",
            friend_email: {
                prompt: "Write an email to your friend. Write about 50 words.",
                suggestion: "<b>Nội dung:</b> Báo tin (Have you got the latest email...). Bày tỏ sự không đồng tình (It's unacceptable...). Hỏi ý kiến (What do you think we can do...?).",
                sample: "Hi Jane,\n\nIt's Susan. Have you got the latest email from our club that some people post negatives on other member's post? It's unacceptable for those rude people. What do you think we can do to stop this? I am going to write an email to the manager to give my opinion about this.\n\nSee you later."
            },
            manager_email: {
                prompt: "Write an email to the manager (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra các giải pháp (solutions). Giải pháp 1: Đặt ra quy định rõ ràng (give clear rules). Giải pháp 2: Khuyến khích sự tôn trọng (encourage people to be understanding and respect others' opinion). Giải pháp 3: Tạo không gian cho phản hồi (give them a place so that they can give feedback).",
                sample: "Dear Manager,\n\nMy name is Susan. I have been the member of our club for six months. I have got the email from our club regarding the negative posts of some members. Personally, I cannot agree with this. I am writing this email to give you some of my opinions as well as suggestions to deal with this problem.\n\nThere are some solutions that we can consider to fix this situation. We should give clear rules about this on our website or newsletters. In addition, we can encourage people to be understanding and respect others' opinion as people are different and so they have different thinking. Last, it is a good idea to give them a place so that they can give feedback or opinion about anything in our club.\n\nI hope my suggestions are useful for our club.\n\nBest regards,"
            }
        }
    },
    "Science": {
        "Part 1": [
            { question: "What is your hobby?", suggestion: "<b>Câu mẫu:</b> I love doing experiments." },
            { question: "What's your favorite subject?", suggestion: "<b>Câu mẫu:</b> I love physics." },
            { question: "Do you like reading?", suggestion: "<b>Câu mẫu:</b> Yes, I love reading science books." },
            { question: "What do you do in your free time?", suggestion: "<b>Câu mẫu:</b> I watch science documentaries." },
            { question: "Where do you live?", suggestion: "<b>Câu mẫu:</b> I live in Ho Chi Minh City." }
        ],
        "Part 2": [
            { question: "Do you like science?", suggestion: "<b>Cấu trúc:</b> Yes, I really love science. It's amazing because...<br><b>Từ vựng:</b> helped our life, become better, many inventions have been made.<br><b>Câu mẫu:</b> Yes, I really love science. It's amazing because it has helped our life become better and better. Thanks to science, many inventions have been made." }
        ],
        "Part 3": [
            { question: "Why did you decide to join the club? How often will you go to the club?", suggestion: "<b>Cấu trúc:</b> I decide to join the club because... I can go to the club...<br><b>Câu mẫu:</b> I decide to join the club because I love science and I want to meet people who have the same interest as me to share knowledge and experiences. I can go to the club twice a week." },
            { question: "Do you remember anything about science which you were taught at school?", suggestion: "<b>Cấu trúc:</b> I can still remember some lessons about... One lesson is that...<br><b>Từ vựng:</b> water can boil, 100 degrees, the earth moves around the sun.<br><b>Câu mẫu:</b> I can still remember some lessons about science. One lesson is that water can boil at 100 degrees or the earth moves around the sun and the sun rises in the east and sets in the west." },
            { question: "Who is your favorite scientist?", suggestion: "<b>Cấu trúc:</b> My favourite scientist is..., who was an American scientist. He is known for...<br><b>Từ vựng:</b> Edison, inventing the electric light bulb, greatest inventor in history.<br><b>Câu mẫu:</b> My favourite scientist is Edison, who was an American scientist. He is known for inventing the electric light bulb. He is regarded the greatest inventor in history. I have read a lot of stories about him." }
        ],
        "Part 4": {
            scenario: "Our club is going to organize a science exhibition next month. Please give some suggestions to encourage both children and adults to attend this exhibition. Besides, should we give free entry fee or not?",
            friend_email: {
                prompt: "Write an email to your friend about your feelings and ideas (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng (I'm so excited...). Đưa ra ý tưởng (vary the topics, offering free tickets).",
                sample: "Hi Jane,\n\nHow's it going? Have you got the email from the club about the science exhibition next month? I'm so excited to know about the news. Do you think we should vary the topics to attract old and young people? Offering free tickets is also a good way to attract more people. What do you think? Let's discuss it over lunch.\n\nBye,"
            },
            manager_email: {
                prompt: "Write an email to the president of the club about your ideas (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đề xuất cách thu hút người tham gia (promote the exhibition on social networking sites, give discounts for families). Đưa ra ý kiến về phí vào cửa (I do not think we should offer free tickets as we need money to organize the event).",
                sample: "Dear Manager,\n\nMy name is Susan, a member of our club for 6 months. I am writing this email regarding the upcoming science exhibition.\n\nTo encourage both children and adults to take part in the exhibition, there are several ways. First, we can promote the exhibition on social networking sites like Facebook and post it in the groups of the areas. Second, it is a good idea to give discounts for families. By this way, we can attract all the members of families to join the event. Regarding the entry fee, I do not think we should offer free tickets as we need money to organize the event.\n\nI hope my ideas will be useful to our club.\n\nBest regards,"
            }
        }
    },
    "Home living": {
        "Part 1": [
            { question: "Where do you live?", suggestion: "<b>Câu mẫu:</b> I live in a small house." },
            { question: "How many rooms are there in your house?", suggestion: "<b>Câu mẫu:</b> There are 5 rooms." },
            { question: "What's your favorite room?", suggestion: "<b>Câu mẫu:</b> I love my bedroom." },
            { question: "Do you like your neighborhood?", suggestion: "<b>Câu mẫu:</b> Yes, it's very quiet." },
            { question: "What do you do at home?", suggestion: "<b>Câu mẫu:</b> I usually relax and watch TV." }
        ],
        "Part 2": [
            { question: "Describe where you live (20-30 words).", suggestion: "<b>Cấu trúc:</b> I live in a... with... It is located in...<br><b>Câu mẫu:</b> I live in a small house with 5 rooms and a small garden. It is located in the city centre so it is convenient for travelling." }
        ],
        "Part 3": [
            { question: "You have to stay in the bedroom but have to share with your brother. How do you feel?", suggestion: "<b>Cấu trúc:</b> It does not matter if I have to share... I think it is better because...<br><b>Câu mẫu:</b> It does not matter if I have to share my bedroom with my brother. I think it is better because I can teach and take care of my brother better. Also, we can talk or share everything about life." },
            { question: "It is better to live in the city than in the countryside. Do you agree? Why?", suggestion: "<b>Cấu trúc:</b> I don't agree with it because living in the countryside also brings some benefits. The air here is... Also, the people are...<br><b>Câu mẫu:</b> I don't agree with it because living in the countryside also brings some benefits. The air here is fresh and really good for people's health. Also, the people are friendly and kind. They are willing to help other people when they are in trouble." },
            { question: "Nowadays, old buildings are demolished and replaced with modern buildings. I feel we should protect historic buildings. What do you think?", suggestion: "<b>Cấu trúc:</b> I think old buildings are not safe... so they should be demolished... However, we should consider some historic buildings as...<br><b>Câu mẫu:</b> I think old buildings are not safe for people living there and surrounding people so they should be demolished and replaced with modern ones. However, we should consider some historic buildings as they have historic values." }
        ],
        "Part 4": {
            scenario: "Currently, there are many young families who want to buy a house or an apartment. The club wants the members to make suggestions to help them find homes.",
            friend_email: {
                prompt: "Write to a friend (50 words).",
                suggestion: "<b>Nội dung:</b> Hỏi thăm và báo tin (Did you get the email...). Đưa ra ý tưởng (Do you think we should have a meeting and invite them...?).",
                sample: "Hi Jane,\n\nHow's it going? Did you get the email from our club that now a lot of young couples want to buy a house or an apartment? What's your take on it? Do you think we should have a meeting and invite them to attend? I am writing an email to the manager to express my ideas.\n\nCatch you later."
            },
            manager_email: {
                prompt: "Write an email to the manager of the club (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đề xuất các cách hỗ trợ (organize seminars about home buying, invite real estate experts, create a network of members who work in real estate).",
                sample: "Dear Manager,\n\nMy name is Jane. I have been an active member of the club for the last year. I am writing this email regarding the request for suggestions to help young families find homes.\n\nI have been informed that many young families need support in finding suitable houses or apartments. Being a member of the club, I would like to offer some ideas. First, we could organize seminars about home buying process, including legal procedures and financial planning. Second, it would be helpful to invite real estate experts to share their knowledge. Third, we could create a network of members who work in real estate to provide guidance and support.\n\nThese activities would not only help young families but also strengthen our community bonds.\n\nI hope my ideas will be helpful to our club.\n\nBest regards,"
            }
        }
    },
    "Travel": {
        "Part 1": [
            { question: "What is your favourite animal?", suggestion: "<b>Câu mẫu:</b> I love cats and dogs." },
            { question: "What time do you get up every day?", suggestion: "<b>Câu mẫu:</b> I get up at 6AM." },
            { question: "What language do you speak?", suggestion: "<b>Câu mẫu:</b> I speak English." },
            { question: "How many people are there in your family?", suggestion: "<b>Câu mẫu:</b> There are 4 people." },
            { question: "Do you like to drink coffee?", suggestion: "<b>Câu mẫu:</b> I really like coffee." }
        ],
        "Part 2": [
            { question: "Why are you interested in travel?", suggestion: "<b>Cấu trúc:</b> I am interested in travel because it is... and it helps me...<br><b>Từ vựng:</b> interesting, useful, relax, reduce stress, broaden my mind, improve my knowledge.<br><b>Câu mẫu:</b> I am interested in travel because it is interesting and useful. It helps me relax and reduce stress. Besides, it allows me to broaden my mind. I can improve my knowledge." }
        ],
        "Part 3": [
            { question: "Tell me a time you had a trip in bad weather.", suggestion: "<b>Cấu trúc:</b> I am going to share with you about a time... It was [X] years ago when I visited...<br><b>Từ vựng:</b> visited Ha Long Bay, started to rain heavily, scared, tour guide reassured us.<br><b>Câu mẫu:</b> It was 2 years ago when I visited Ha long Bay with my family. It was a July day. When we were going to the island, it started to rain heavily. We were very scared, but the tour guide reassured us. Then, it stopped raining and we arrived safely." },
            { question: "Travelling a long distance by some means of transportation is not good for the environment. Do you agree?", suggestion: "<b>Cấu trúc:</b> I totally agree with this statement. Some kinds of transportation... can seriously pollute...<br><b>Từ vựng:</b> pollute the air and water, affect people's health.<br><b>Câu mẫu:</b> I totally agree with this statement. Some kinds of transportation for long distance like airplanes, trains, ships or cars can seriously pollute the air and water, which can directly affect people's health." },
            { question: "What are the most interesting places to visit in your country?", suggestion: "<b>Cấu trúc:</b> There are many popular travel destinations in my country including... Here they can...<br><b>Từ vựng:</b> tourist attractions, Halong Bay, Dat Lat, Hanoi, enjoy the beauty of nature, local food, explore new places.<br><b>Câu mẫu:</b> There are many popular travel destinations/ tourist attractions in my country including Halong Bay, Dat Lat and Hanoi. Here they can enjoy the beauty of the nature, local food, explore new places and meet hospitable people." }
        ],
        "Part 4": {
            scenario: "The club is preparing to welcome a group of foreign tourists visiting our country for the first time. Do you have any suggestions to welcome them and communicate with them because they do not speak Vietnamese?",
            friend_email: {
                prompt: "Write an email to your friend about your feelings and suggestions (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng (I'm excited about...). Đưa ra gợi ý (prepare some translation apps, learn basic English phrases).",
                sample: "Hi Jane,\n\nDid you hear about the foreign tourists visiting our club? I'm excited about this opportunity! Do you think we should prepare some translation apps and learn basic English phrases to communicate better? Maybe we could also prepare some welcome gifts with Vietnamese cultural items. What do you think? Let's discuss this over coffee.\n\nSee you soon,"
            },
            manager_email: {
                prompt: "Write an email to the manager about your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đề xuất cách chào đón (prepare welcome ceremony, assign English-speaking members as guides). Đề xuất cách giao tiếp (use translation apps, prepare basic English phrases, visual aids).",
                sample: "Dear Manager,\n\nMy name is Mary. I have been an active member of the club for the last year. I am writing this email regarding the upcoming visit from foreign tourists.\n\nI am excited to hear that we will welcome international visitors. To make their visit memorable, I would like to suggest several ideas. First, we could organize a small welcome ceremony with traditional Vietnamese music and local snacks. Second, we should assign English-speaking members as guides to help with communication. Third, we could prepare translation apps and basic English phrases for all members.\n\nAdditionally, we could create visual aids showing popular Vietnamese destinations and cultural activities. This would help overcome language barriers and make the experience more interactive and enjoyable for everyone.\n\nI hope these suggestions will be helpful for our club.\n\nBest regards,"
            }
        }
    },
    "Food": {
        "Part 1": [
            { question: "What's your hobby?", suggestion: "<b>Câu mẫu:</b> I love cooking." },
            { question: "What's your favorite food?", suggestion: "<b>Câu mẫu:</b> I love Vietnamese pho." },
            { question: "Do you like spicy food?", suggestion: "<b>Câu mẫu:</b> Yes, I enjoy spicy dishes." },
            { question: "Where do you usually eat lunch?", suggestion: "<b>Câu mẫu:</b> At home with my family." },
            { question: "Can you cook?", suggestion: "<b>Câu mẫu:</b> Yes, I can cook basic dishes." }
        ],
        "Part 2": [
            { question: "Why did you decide to join the club?", suggestion: "<b>Cấu trúc:</b> Because I like... and I can learn... Besides, I can meet...<br><b>Từ vựng:</b> cooking, learn how to cook, many kinds of food, meet people who love cooking.<br><b>Câu mẫu:</b> Because I like cooking and I can learn how to cook many kinds of food. Besides, I can meet people who love cooking, too." }
        ],
        "Part 3": [
            { question: "Should a tax be imposed on unhealthy food?", suggestion: "<b>Cấu trúc:</b> I think that a tax should be imposed on unhealthy food because... It can cause...<br><b>Từ vựng:</b> important, necessary, not good for our health, cause health problems, cancer, heart disease.<br><b>Câu mẫu:</b> I think that a tax should be imposed on unhealthy food because it is important. Unhealthy food is not good for our health. It can cause some health problems such as cancer, heart disease and so on. It can reduce harmful food and this is the best way to protect people's health." },
            { question: "Do you prefer eating at home or at restaurants?", suggestion: "<b>Cấu trúc:</b> I prefer eating at home because... However, eating at restaurants...<br><b>Từ vựng:</b> healthier, save money, family time, convenient, try new dishes, social experience.<br><b>Câu mẫu:</b> I prefer eating at home because it's healthier and I can save money. Also, it's a great time to spend with family. However, eating at restaurants is convenient and allows me to try new dishes and have social experiences." }
        ],
        "Part 4": {
            scenario: "The club is planning to organize a cooking competition for members. We need to decide whether to focus on traditional Vietnamese dishes or international cuisine. What are your suggestions?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng (I'm so excited...). Đưa ra lựa chọn (I think we should focus on traditional Vietnamese dishes) và lý do ngắn gọn.",
                sample: "Hi Jane,\n\nDid you hear about the cooking competition our club is organizing? I'm so excited! I think we should focus on traditional Vietnamese dishes because it's a great way to preserve and share our culture. Plus, most members are familiar with Vietnamese ingredients. What's your opinion? Let's talk about it after the meeting.\n\nSee you later,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn và lý do (focus on traditional Vietnamese dishes to preserve culture). Đề xuất cách tổ chức (different categories for different skill levels, invite local chefs as judges).",
                sample: "Dear Manager,\n\nMy name is Sarah. I have been an active member of the club for the past eight months. I am writing this email regarding the upcoming cooking competition.\n\nI am thrilled to hear about this exciting event. Regarding the choice between traditional Vietnamese dishes and international cuisine, I believe we should focus on traditional Vietnamese dishes. This approach would help preserve and promote our cultural heritage while allowing members to showcase their knowledge of local ingredients and cooking techniques.\n\nTo make the competition more engaging, I suggest creating different categories based on skill levels - beginner, intermediate, and advanced. We could also invite local chefs as judges to provide professional feedback. Additionally, we could organize cooking demonstrations before the competition to help members improve their skills.\n\nI hope these suggestions will contribute to a successful event.\n\nBest regards,"
            }
        }
    },
    "Music": {
        "Part 1": [
            { question: "Do you like music?", suggestion: "<b>Câu mẫu:</b> Yes, I love music very much." },
            { question: "What kind of music do you like?", suggestion: "<b>Câu mẫu:</b> I like pop and rock music." },
            { question: "Can you play any musical instrument?", suggestion: "<b>Câu mẫu:</b> I can play the guitar." },
            { question: "How often do you listen to music?", suggestion: "<b>Câu mẫu:</b> I listen to music every day." },
            { question: "Who is your favorite singer?", suggestion: "<b>Câu mẫu:</b> I love Taylor Swift." }
        ],
        "Part 2": [
            { question: "Tell me about your favorite type of music.", suggestion: "<b>Cấu trúc:</b> My favorite type of music is... I like it because... It makes me feel...<br><b>Từ vựng:</b> pop music, upbeat, energetic, relaxed, happy, emotional.<br><b>Câu mẫu:</b> My favorite type of music is pop music. I like it because it's upbeat and energetic. It makes me feel happy and relaxed after a long day of work or study." }
        ],
        "Part 3": [
            { question: "Do you think music education is important in schools?", suggestion: "<b>Cấu trúc:</b> I believe music education is very important because... It helps students...<br><b>Từ vựng:</b> develop creativity, improve memory, express emotions, cultural awareness, teamwork skills.<br><b>Câu mẫu:</b> I believe music education is very important because it helps students develop creativity and improve their memory. Music also allows students to express their emotions and gain cultural awareness. Additionally, playing in bands or orchestras teaches valuable teamwork skills." },
            { question: "How has technology changed the music industry?", suggestion: "<b>Cấu trúc:</b> Technology has completely changed the music industry. In the past... Now...<br><b>Từ vựng:</b> streaming services, digital downloads, social media, music production software, global reach.<br><b>Câu mẫu:</b> Technology has completely changed the music industry. In the past, people bought physical albums and listened to radio. Now, streaming services like Spotify allow instant access to millions of songs. Social media helps artists reach global audiences, and advanced software makes music production more accessible to everyone." }
        ],
        "Part 4": {
            scenario: "The music club is planning to organize a concert featuring both local and international artists. However, the budget is limited. Should we focus on supporting local musicians or bringing international acts?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng về concert. Đưa ra lựa chọn (support local musicians) và lý do ngắn gọn (cost-effective, support community).",
                sample: "Hi Tom,\n\nDid you hear about the concert our music club is organizing? I'm really excited! I think we should focus on supporting local musicians since our budget is limited. It's more cost-effective and helps our local music community grow. Plus, local artists often have loyal fan bases. What do you think?\n\nLet's chat soon,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on local musicians) và các lý do chi tiết (budget constraints, community support, discovering new talent). Đề xuất cách tổ chức để tối ưu hóa sự kiện.",
                sample: "Dear Manager,\n\nMy name is Alex. I have been an active member of the music club for the last year. I am writing this email regarding the upcoming concert planning.\n\nI am excited about organizing this concert event. Considering our budget constraints, I believe we should focus on supporting local musicians rather than international acts. This approach offers several advantages: it's more cost-effective, supports our local music community, and helps discover new talent in our area.\n\nTo maximize the event's success, I suggest partnering with local music schools and venues for additional support. We could also create different performance categories - solo artists, bands, and acoustic performances - to showcase variety. Additionally, we could invite local music critics and bloggers to help promote the event and provide exposure for the participating artists.\n\nI hope these suggestions will help create a successful and memorable concert.\n\nBest regards,"
            }
        }
    },
    "Sports & Fitness": {
        "Part 1": [
            { question: "Do you like sports?", suggestion: "<b>Câu mẫu:</b> Yes, I love playing sports." },
            { question: "What sport do you play?", suggestion: "<b>Câu mẫu:</b> I play soccer and tennis." },
            { question: "How often do you exercise?", suggestion: "<b>Câu mẫu:</b> I exercise three times a week." },
            { question: "Do you go to a gym?", suggestion: "<b>Câu mẫu:</b> Yes, I go to a gym near my house." },
            { question: "What's your favorite Olympic sport?", suggestion: "<b>Câu mẫu:</b> I love watching swimming." }
        ],
        "Part 2": [
            { question: "Why is exercise important?", suggestion: "<b>Cấu trúc:</b> Exercise is very important because... It helps us...<br><b>Từ vựng:</b> stay healthy, improve strength, prevent diseases, maintain weight, boost energy.<br><b>Câu mẫu:</b> Exercise is very important because it helps us stay healthy and improve our physical strength. Regular exercise can prevent many diseases and help maintain a healthy weight." }
        ],
        "Part 3": [
            { question: "Should schools require students to participate in sports?", suggestion: "<b>Cấu trúc:</b> I believe schools should encourage sports because... It teaches students...<br><b>Từ vựng:</b> teamwork, discipline, healthy habits, confidence, social skills.<br><b>Câu mẫu:</b> I believe schools should encourage sports because it teaches students important values like teamwork and discipline. Sports also help develop healthy habits and build confidence." },
            { question: "How has fitness culture changed over the years?", suggestion: "<b>Cấu trúc:</b> Fitness culture has changed significantly. In the past... Now people...<br><b>Từ vựng:</b> home workouts, fitness apps, social media influence, trendy exercises, health awareness.<br><b>Câu mẫu:</b> Fitness culture has changed significantly. In the past, people mainly exercised at gyms or played traditional sports. Now people use fitness apps, do home workouts, and follow trendy exercises they see on social media." }
        ],
        "Part 4": {
            scenario: "Our sports club is planning to organize a community fitness event. We need to decide between focusing on team sports or individual fitness activities. What are your suggestions?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hào hứng (I'm excited about the fitness event). Đưa ra lựa chọn (I think we should focus on team sports) và lý do ngắn gọn (more engaging, builds community spirit).",
                sample: "Hi Sarah,\n\nDid you hear about our sports club organizing a community fitness event? I'm excited about this! I think we should focus on team sports because they're more engaging and help build community spirit. People can make new friends while staying active. What's your opinion?\n\nLet's discuss this later,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on team sports) và các lý do chi tiết (builds relationships, more motivating, suitable for all fitness levels). Đề xuất các hoạt động cụ thể (soccer tournaments, relay races, group fitness classes).",
                sample: "Dear Manager,\n\nMy name is Mike. I have been an active member of the sports club for the past year. I am writing regarding the upcoming community fitness event.\n\nI am thrilled about this initiative to promote fitness in our community. Regarding the choice between team sports and individual activities, I believe we should focus on team sports for several reasons. First, team sports help build relationships and create a sense of community among participants. Second, they are more motivating as people encourage each other. Third, team activities can be adapted to suit different fitness levels.\n\nI suggest organizing soccer tournaments, relay races, and group fitness classes. We could also include family-friendly activities like tug-of-war competitions to attract participants of all ages.\n\nI hope these suggestions will contribute to a successful event.\n\nBest regards,"
            }
        }
    },
    "Health & Medicine": {
        "Part 1": [
            { question: "How often do you see a doctor?", suggestion: "<b>Câu mẫu:</b> I see a doctor once a year." },
            { question: "Do you take any vitamins?", suggestion: "<b>Câu mẫu:</b> Yes, I take vitamin C daily." },
            { question: "What do you do when you're sick?", suggestion: "<b>Câu mẫu:</b> I rest and drink lots of water." },
            { question: "Do you have health insurance?", suggestion: "<b>Câu mẫu:</b> Yes, I have basic health insurance." },
            { question: "What's your biggest health concern?", suggestion: "<b>Câu mẫu:</b> I worry about staying fit as I age." }
        ],
        "Part 2": [
            { question: "How do you maintain good health?", suggestion: "<b>Cấu trúc:</b> To maintain good health, I... I also make sure to...<br><b>Từ vựng:</b> eat balanced meals, exercise regularly, get enough sleep, manage stress, avoid smoking.<br><b>Câu mẫu:</b> To maintain good health, I eat balanced meals and exercise regularly. I also make sure to get enough sleep and try to manage stress through meditation." }
        ],
        "Part 3": [
            { question: "Should healthcare be free for everyone?", suggestion: "<b>Cấu trúc:</b> I believe healthcare should be accessible because... However, there are challenges...<br><b>Từ vựng:</b> basic human right, expensive treatments, government funding, quality of care, prevention programs.<br><b>Câu mẫu:</b> I believe healthcare should be accessible to everyone because it's a basic human right. However, there are challenges with funding expensive treatments and maintaining quality of care." },
            { question: "How has technology changed healthcare?", suggestion: "<b>Cấu trúc:</b> Technology has revolutionized healthcare in many ways... For example...<br><b>Từ vựng:</b> telemedicine, medical apps, electronic records, robotic surgery, diagnostic tools.<br><b>Câu mẫu:</b> Technology has revolutionized healthcare in many ways. For example, telemedicine allows patients to consult doctors remotely, and advanced diagnostic tools help detect diseases earlier." }
        ],
        "Part 4": {
            scenario: "Our health club wants to organize a health awareness campaign. Should we focus on mental health or physical health? Please provide your recommendations.",
            friend_email: {
                prompt: "Write an email to your friend about your preference (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự quan tâm (I'm interested in the health campaign). Đưa ra lựa chọn (I think we should focus on mental health) và lý do (often overlooked, very important nowadays).",
                sample: "Hi Emma,\n\nI heard about our health club's awareness campaign. I'm really interested in this initiative! I think we should focus on mental health because it's often overlooked, yet it's very important nowadays with all the stress people face. Mental health affects everything else too.\n\nWhat do you think?\n\nBest,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on mental health) và các lý do (increasing stress levels, stigma around mental health, affects overall wellbeing). Đề xuất các hoạt động (stress management workshops, meditation sessions, mental health talks).",
                sample: "Dear Manager,\n\nMy name is Lisa. I have been a dedicated member of our health club for two years. I am writing regarding the upcoming health awareness campaign.\n\nI am very supportive of this important initiative. While both mental and physical health are crucial, I believe we should focus on mental health for this campaign. With increasing stress levels in modern life, many people struggle with anxiety and depression but don't know how to seek help due to stigma around mental health issues.\n\nI suggest organizing stress management workshops, guided meditation sessions, and talks by mental health professionals. We could also create informational materials about recognizing signs of mental health problems and available resources for support.\n\nI believe this focus will address an urgent need in our community.\n\nBest regards,"
            }
        }
    },
    "Education & Learning": {
        "Part 1": [
            { question: "What subject did you like best at school?", suggestion: "<b>Câu mẫu:</b> I liked mathematics and history best." },
            { question: "Do you prefer studying alone or in groups?", suggestion: "<b>Câu mẫu:</b> I prefer studying alone because I can focus better." },
            { question: "Have you ever taken an online course?", suggestion: "<b>Câu mẫu:</b> Yes, I took an English course online." },
            { question: "What's the most difficult subject for you?", suggestion: "<b>Câu mẫu:</b> Physics was the most difficult subject for me." },
            { question: "Do you think homework is important?", suggestion: "<b>Câu mẫu:</b> Yes, homework helps reinforce what we learn." }
        ],
        "Part 2": [
            { question: "Describe your ideal learning environment.", suggestion: "<b>Cấu trúc:</b> My ideal learning environment would be... It should have...<br><b>Từ vựng:</b> quiet space, natural light, comfortable furniture, access to resources, supportive atmosphere.<br><b>Câu mẫu:</b> My ideal learning environment would be a quiet space with plenty of natural light and comfortable furniture. It should have easy access to books and technology, with a supportive atmosphere where questions are encouraged." }
        ],
        "Part 3": [
            { question: "Should education be more practical or theoretical?", suggestion: "<b>Cấu trúc:</b> I believe education should balance both because... Practical skills help students... while theoretical knowledge...<br><b>Từ vựng:</b> real-world applications, critical thinking, problem-solving, job market, academic foundation.<br><b>Câu mẫu:</b> I believe education should balance both practical and theoretical approaches. Practical skills help students apply knowledge to real-world situations, while theoretical knowledge provides a strong academic foundation for critical thinking." },
            { question: "How has online learning changed education?", suggestion: "<b>Cấu trúc:</b> Online learning has transformed education by... It offers advantages like... but also challenges such as...<br><b>Từ vựng:</b> accessibility, flexibility, global reach, self-discipline, technical issues, social interaction.<br><b>Câu mẫu:</b> Online learning has transformed education by making it more accessible and flexible. It offers advantages like learning at your own pace and accessing courses globally, but also challenges such as requiring more self-discipline." }
        ],
        "Part 4": {
            scenario: "Our education club is planning to establish a study support program. Should we focus on elementary students or high school students? What are your recommendations?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự ủng hộ (I support the study program idea). Đưa ra lựa chọn (I think we should help elementary students) và lý do (build strong foundation, more impact).",
                sample: "Hi David,\n\nI heard about our education club's study support program - great idea! I think we should focus on elementary students because that's when we can help them build a strong foundation for learning. The impact would be greater in their formative years.\n\nWhat's your thought on this?\n\nCheers,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on elementary students) và các lý do (formative years, prevent learning gaps, easier to address). Đề xuất các hoạt động (homework assistance, reading programs, math tutoring).",
                sample: "Dear Manager,\n\nMy name is Kevin. I have been an active member of the education club for the past year. I am writing regarding the proposed study support program.\n\nI am very enthusiastic about this initiative to support student learning. While both age groups need assistance, I believe we should focus on elementary students for several reasons. First, these are formative years when learning habits are established. Second, we can prevent learning gaps from widening. Third, elementary concepts are often easier to address than complex high school subjects.\n\nI suggest offering homework assistance sessions, reading comprehension programs, and basic math tutoring. We could also organize fun educational activities like science experiments and educational games to make learning enjoyable.\n\nI believe this approach will create the most positive impact on students' academic journey.\n\nBest regards,"
            }
        }
    },
    "Work & Career": {
        "Part 1": [
            { question: "What is your dream job?", suggestion: "<b>Câu mẫu:</b> My dream job is to become a software engineer." },
            { question: "Do you work part-time or full-time?", suggestion: "<b>Câu mẫu:</b> I work full-time at a marketing company." },
            { question: "What skills are important for your job?", suggestion: "<b>Câu mẫu:</b> Communication and problem-solving skills are very important." },
            { question: "Do you like working in a team?", suggestion: "<b>Câu mẫu:</b> Yes, I enjoy collaborating with teammates." },
            { question: "How do you handle work stress?", suggestion: "<b>Câu mẫu:</b> I take short breaks and practice deep breathing." }
        ],
        "Part 2": [
            { question: "Describe your ideal workplace.", suggestion: "<b>Cấu trúc:</b> My ideal workplace would be... It should offer...<br><b>Từ vựng:</b> flexible hours, supportive colleagues, growth opportunities, work-life balance, modern facilities.<br><b>Câu mẫu:</b> My ideal workplace would be one that offers flexible working hours and has supportive colleagues. It should provide growth opportunities and maintain a good work-life balance with modern facilities." }
        ],
        "Part 3": [
            { question: "Is it better to work for a large company or a small company?", suggestion: "<b>Cấu trúc:</b> Both have advantages. Large companies offer... while small companies provide...<br><b>Từ vựng:</b> job security, career advancement, resources, personal relationships, flexibility, innovation.<br><b>Câu mẫu:</b> Both have advantages. Large companies offer better job security and clear career advancement paths, while small companies provide more personal relationships with colleagues and greater flexibility in decision-making." },
            { question: "How important is job satisfaction compared to salary?", suggestion: "<b>Cấu trúc:</b> I believe both are important, but... Job satisfaction affects... while salary...<br><b>Từ vựng:</b> motivation, quality of life, financial security, personal fulfillment, long-term happiness.<br><b>Câu mẫu:</b> I believe both are important, but job satisfaction often matters more in the long run. Job satisfaction affects your daily motivation and quality of life, while salary provides financial security." }
        ],
        "Part 4": {
            scenario: "Our career development club is organizing a workshop series. Should we focus on technical skills training or soft skills development? Please share your recommendations.",
            friend_email: {
                prompt: "Write an email to your friend about your preference (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự quan tâm (I'm interested in the workshop series). Đưa ra lựa chọn (I think soft skills are more important) và lý do (applicable to all careers, often overlooked).",
                sample: "Hi Rachel,\n\nI heard about our career club's workshop series - sounds fantastic! I think we should focus on soft skills development because these skills are applicable to all careers and often overlooked in formal education. Things like communication, leadership, and emotional intelligence are crucial nowadays.\n\nWhat's your view?\n\nRegards,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on soft skills) và các lý do (universal application, gap in education, high demand from employers). Đề xuất các chủ đề (communication, leadership, time management, emotional intelligence).",
                sample: "Dear Manager,\n\nMy name is Alex. I have been a committed member of the career development club for eight months. I am writing regarding the upcoming workshop series.\n\nI am excited about this valuable initiative for professional development. While both technical and soft skills are important, I recommend focusing on soft skills development for several reasons. First, these skills have universal application across all industries and career levels. Second, there's often a gap in formal education regarding these competencies. Third, employers consistently report high demand for candidates with strong soft skills.\n\nI suggest organizing workshops on effective communication, leadership principles, time management, and emotional intelligence. We could also include networking strategies and presentation skills, as these are highly valuable in today's workplace.\n\nI believe this focus will provide maximum benefit to our diverse membership.\n\nBest regards,"
            }
        }
    },
    "Environment & Climate": {
        "Part 1": [
            { question: "Do you recycle at home?", suggestion: "<b>Câu mẫu:</b> Yes, I recycle paper, plastic, and glass." },
            { question: "What's your favorite season?", suggestion: "<b>Câu mẫu:</b> I love spring because of the pleasant weather." },
            { question: "Do you use public transportation?", suggestion: "<b>Câu mẫu:</b> Yes, I take the bus to work every day." },
            { question: "Are you concerned about climate change?", suggestion: "<b>Câu mẫu:</b> Yes, I'm very worried about global warming." },
            { question: "Do you grow any plants at home?", suggestion: "<b>Câu mẫu:</b> Yes, I have some herbs in my kitchen garden." }
        ],
        "Part 2": [
            { question: "How do you help protect the environment?", suggestion: "<b>Cấu trúc:</b> I help protect the environment by... I also try to...<br><b>Từ vựng:</b> reduce waste, conserve energy, use eco-friendly products, walk instead of driving, recycle materials.<br><b>Câu mẫu:</b> I help protect the environment by reducing waste and conserving energy at home. I also try to use eco-friendly products and walk instead of driving when possible." }
        ],
        "Part 3": [
            { question: "Should governments do more to fight climate change?", suggestion: "<b>Cấu trúc:</b> I believe governments should take stronger action because... They could implement policies like...<br><b>Từ vựng:</b> renewable energy, carbon taxes, environmental regulations, international cooperation, sustainable development.<br><b>Câu mẫu:</b> I believe governments should take stronger action because climate change affects everyone globally. They could implement policies like promoting renewable energy, imposing carbon taxes on polluting industries, and investing in sustainable development." },
            { question: "How can individuals make a difference in environmental protection?", suggestion: "<b>Cấu trúc:</b> Individuals can make a significant impact through... Small actions like... can add up to...<br><b>Từ vựng:</b> lifestyle changes, conscious consumption, energy conservation, waste reduction, community involvement.<br><b>Câu mẫu:</b> Individuals can make a significant impact through conscious lifestyle changes and community involvement. Small actions like using less plastic, conserving water, and choosing sustainable products can add up to meaningful environmental protection." }
        ],
        "Part 4": {
            scenario: "Our environmental club wants to organize an awareness campaign. Should we focus on plastic reduction or energy conservation? What are your suggestions?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự ủng hộ (I support the environmental campaign). Đưa ra lựa chọn (I think plastic reduction is more urgent) và lý do (visible problem, easy to understand).",
                sample: "Hi Jordan,\n\nGreat news about our environmental club's awareness campaign! I support this initiative wholeheartedly. I think we should focus on plastic reduction because it's a more visible problem that people can easily understand and act upon. Plastic pollution is everywhere and affects wildlife directly.\n\nYour thoughts?\n\nBest,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on plastic reduction) và các lý do (immediate impact, easy to implement, visible results). Đề xuất các hoạt động (plastic-free challenges, reusable item distribution, beach cleanups).",
                sample: "Dear Manager,\n\nMy name is Sophie. I have been an active member of the environmental club for the past six months. I am writing regarding the upcoming awareness campaign.\n\nI am thrilled about this important environmental initiative. While both plastic reduction and energy conservation are crucial, I recommend focusing on plastic reduction for this campaign. This topic offers several advantages: people can see immediate impacts, solutions are easy to implement in daily life, and results are visible to the community.\n\nI suggest organizing plastic-free lifestyle challenges, distributing reusable bags and water bottles, and conducting beach or park cleanup activities. We could also partner with local businesses to promote plastic alternatives and create educational displays showing the impact of plastic pollution on marine life.\n\nI believe this approach will generate strong community engagement and measurable results.\n\nBest regards,"
            }
        }
    },
    "Entertainment & Media": {
        "Part 1": [
            { question: "What's your favorite movie genre?", suggestion: "<b>Câu mẫu:</b> I love action and comedy movies." },
            { question: "Do you prefer books or movies?", suggestion: "<b>Câu mẫu:</b> I prefer books because they're more detailed." },
            { question: "How often do you watch TV?", suggestion: "<b>Câu mẫu:</b> I watch TV for about two hours every evening." },
            { question: "Do you play video games?", suggestion: "<b>Câu mẫu:</b> Yes, I play puzzle games on my phone." },
            { question: "What's your favorite social media platform?", suggestion: "<b>Câu mẫu:</b> I like Instagram for sharing photos." }
        ],
        "Part 2": [
            { question: "How has streaming changed the way we watch movies?", suggestion: "<b>Cấu trúc:</b> Streaming has completely changed how we consume media... Now we can...<br><b>Từ vựng:</b> on-demand viewing, binge-watching, global content, convenience, subscription services.<br><b>Câu mẫu:</b> Streaming has completely changed how we consume media by making content available on-demand. Now we can watch what we want, when we want, and even binge-watch entire series. We also have access to global content from different countries." }
        ],
        "Part 3": [
            { question: "Do you think social media has more positive or negative effects?", suggestion: "<b>Cấu trúc:</b> Social media has both positive and negative effects. On the positive side... However, there are concerns about...<br><b>Từ vựng:</b> global connectivity, information sharing, mental health, privacy issues, fake news.<br><b>Câu mẫu:</b> Social media has both positive and negative effects. On the positive side, it enables global connectivity and instant information sharing. However, there are concerns about mental health impacts, privacy issues, and the spread of fake news." },
            { question: "Should there be age restrictions on certain types of entertainment?", suggestion: "<b>Cấu trúc:</b> I believe age restrictions are necessary for... This protects children from... while allowing adults to...<br><b>Từ vựng:</b> mature content, child development, violent material, parental guidance, content rating systems.<br><b>Câu mẫu:</b> I believe age restrictions are necessary for certain types of entertainment to protect children from inappropriate content. This includes violent or mature material that could affect child development, while content rating systems help parents make informed decisions." }
        ],
        "Part 4": {
            scenario: "Our media club is planning to create content for social media. Should we focus on educational content or entertainment content? Please provide your recommendations.",
            friend_email: {
                prompt: "Write an email to your friend about your preference (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự hứng thú (I'm excited about our media project). Đưa ra lựa chọn (I think educational content is better) và lý do (more meaningful, helps people learn).",
                sample: "Hi Taylor,\n\nI'm excited about our media club's social media project! I think we should focus on educational content because it's more meaningful and helps people learn new things. We could make learning fun and engaging through creative videos and infographics. Educational content also has longer-lasting value.\n\nWhat do you think?\n\nCheers,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on educational content) và các lý do (adds value, builds reputation, serves community). Đề xuất các định dạng (how-to videos, infographics, quick tips).",
                sample: "Dear Manager,\n\nMy name is Morgan. I have been an enthusiastic member of the media club for seven months. I am writing regarding our upcoming social media content creation project.\n\nI am very excited about this opportunity to showcase our club's creativity. While entertainment content can attract viewers, I recommend focusing on educational content for several reasons. First, educational content adds real value to people's lives and builds our reputation as a credible source. Second, it serves our community by sharing useful knowledge and skills.\n\nI suggest creating how-to videos, informative infographics, and quick daily tips related to media literacy, photography techniques, or video editing basics. This approach will differentiate us from purely entertainment-focused accounts and establish our club as both informative and engaging.\n\nI believe this strategy will build a loyal, engaged following.\n\nBest regards,"
            }
        }
    },
    "Culture & Arts": {
        "Part 1": [
            { question: "Do you enjoy visiting museums?", suggestion: "<b>Câu mẫu:</b> Yes, I love learning about history and art." },
            { question: "Can you play any musical instrument?", suggestion: "<b>Câu mẫu:</b> I can play the piano and guitar." },
            { question: "What's your favorite type of art?", suggestion: "<b>Câu mẫu:</b> I prefer photography and sculpture." },
            { question: "Do you like attending cultural festivals?", suggestion: "<b>Câu mẫu:</b> Yes, I enjoy experiencing different traditions." },
            { question: "Have you ever taken art classes?", suggestion: "<b>Câu mẫu:</b> Yes, I took painting classes last year." }
        ],
        "Part 2": [
            { question: "Why is art important in society?", suggestion: "<b>Cấu trúc:</b> Art plays a crucial role in society because... It helps us...<br><b>Từ vựng:</b> express emotions, preserve culture, inspire creativity, bring communities together, challenge perspectives.<br><b>Câu mẫu:</b> Art plays a crucial role in society because it helps us express emotions and preserve cultural heritage. Art inspires creativity, brings communities together through shared experiences, and challenges our perspectives on important issues." }
        ],
        "Part 3": [
            { question: "Should art education be mandatory in schools?", suggestion: "<b>Cấu trúc:</b> I believe art education should be mandatory because... It develops students'... and helps them...<br><b>Từ vựng:</b> creativity, critical thinking, self-expression, cultural awareness, emotional intelligence.<br><b>Câu mẫu:</b> I believe art education should be mandatory because it develops students' creativity and critical thinking skills. Art classes help students express themselves, develop cultural awareness, and build emotional intelligence through various forms of artistic expression." },
            { question: "How has digital technology changed the arts?", suggestion: "<b>Cấu trúc:</b> Digital technology has revolutionized the arts by... Artists now can... However, some traditional methods...<br><b>Từ vựng:</b> digital art tools, global platforms, virtual exhibitions, accessibility, traditional craftsmanship.<br><b>Câu mẫu:</b> Digital technology has revolutionized the arts by providing new creative tools and global platforms for artists. Artists can now create digital masterpieces and reach worldwide audiences through virtual exhibitions. However, some worry about losing traditional craftsmanship skills." }
        ],
        "Part 4": {
            scenario: "Our arts club wants to organize a cultural event. Should we focus on local traditional arts or contemporary modern arts? What are your recommendations?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự quan tâm (I'm interested in the cultural event). Đưa ra lựa chọn (I think traditional arts are more valuable) và lý do (preserve heritage, educate people).",
                sample: "Hi Casey,\n\nI heard about our arts club's cultural event - how exciting! I think we should focus on local traditional arts because it's important to preserve our cultural heritage and educate people about our history. Traditional arts also connect us with our roots and identity.\n\nWhat's your opinion?\n\nBest wishes,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on traditional arts) và các lý do (cultural preservation, educational value, community pride). Đề xuất các hoạt động (craft demonstrations, traditional music performances, storytelling sessions).",
                sample: "Dear Manager,\n\nMy name is Jamie. I have been a passionate member of the arts club for ten months. I am writing regarding the upcoming cultural event planning.\n\nI am very supportive of this initiative to promote arts in our community. While both traditional and contemporary arts have merit, I recommend focusing on local traditional arts for several important reasons. First, traditional arts need active preservation as they risk being forgotten in our modern world. Second, they provide educational value about our cultural heritage. Third, they instill community pride and cultural identity.\n\nI suggest organizing craft demonstrations, traditional music and dance performances, and storytelling sessions with local elders. We could also create interactive workshops where visitors can try traditional art forms themselves, making the experience both educational and engaging.\n\nI believe this approach will create meaningful cultural connections.\n\nBest regards,"
            }
        }
    },
    "Family & Relationships": {
        "Part 1": [
            { question: "How many people are in your family?", suggestion: "<b>Câu mẫu:</b> There are four people in my family." },
            { question: "Who are you closest to in your family?", suggestion: "<b>Câu mẫu:</b> I'm closest to my younger sister." },
            { question: "Do you have a best friend?", suggestion: "<b>Câu mẫu:</b> Yes, I have a best friend from high school." },
            { question: "How often do you call your parents?", suggestion: "<b>Câu mẫu:</b> I call my parents every weekend." },
            { question: "What makes a good friend?", suggestion: "<b>Câu mẫu:</b> A good friend is honest and supportive." }
        ],
        "Part 2": [
            { question: "Describe your ideal family gathering.", suggestion: "<b>Cấu trúc:</b> My ideal family gathering would be... Everyone would...<br><b>Từ vựng:</b> comfortable atmosphere, home-cooked meals, sharing stories, playing games, quality time.<br><b>Câu mẫu:</b> My ideal family gathering would be at home with a comfortable atmosphere and home-cooked meals. Everyone would share stories about their lives, play games together, and simply enjoy quality time without distractions from phones or work." }
        ],
        "Part 3": [
            { question: "How have family structures changed over the years?", suggestion: "<b>Cấu trúc:</b> Family structures have changed significantly. In the past... Now we see more...<br><b>Từ vựng:</b> nuclear families, extended families, single parents, blended families, diverse arrangements.<br><b>Câu mẫu:</b> Family structures have changed significantly over the years. In the past, most families were traditional nuclear families with extended family nearby. Now we see more diverse arrangements including single parents, blended families, and people choosing to live independently longer." },
            { question: "Is it important for children to maintain close relationships with grandparents?", suggestion: "<b>Cấu trúc:</b> I believe children should maintain close relationships with grandparents because... Grandparents provide...<br><b>Từ vựng:</b> wisdom, family history, unconditional love, life experience, cultural traditions.<br><b>Câu mẫu:</b> I believe children should maintain close relationships with grandparents because they provide wisdom and share important family history. Grandparents offer unconditional love, valuable life experience, and help pass down cultural traditions to younger generations." }
        ],
        "Part 4": {
            scenario: "Our community club wants to organize a family-oriented event. Should we focus on activities for young families with children or activities that include elderly family members? Please share your thoughts.",
            friend_email: {
                prompt: "Write an email to your friend about your preference (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự ủng hộ (I support the family event idea). Đưa ra lựa chọn (I think we should include elderly members) và lý do (brings generations together, everyone feels valued).",
                sample: "Hi Riley,\n\nI love the idea of our community club organizing a family event! I think we should design activities that include elderly family members because it brings different generations together and makes everyone feel valued. Multi-generational events create beautiful memories and strengthen family bonds.\n\nWhat do you think?\n\nWarmly,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (include elderly members) và các lý do (intergenerational bonding, inclusive community, wisdom sharing). Đề xuất các hoạt động (storytelling circles, traditional games, craft workshops).",
                sample: "Dear Manager,\n\nMy name is Taylor. I have been an active member of our community club for the past year. I am writing regarding the upcoming family-oriented event.\n\nI am delighted about this initiative to strengthen family bonds in our community. While activities for young families are important, I recommend designing events that include elderly family members for several reasons. First, intergenerational activities create stronger family connections. Second, inclusive events ensure no family member feels left out. Third, they provide opportunities for wisdom and tradition sharing between generations.\n\nI suggest organizing storytelling circles where grandparents can share family histories, traditional games that all ages can enjoy, and craft workshops where older members can teach younger ones traditional skills. These activities would celebrate the value of every family member.\n\nI believe this inclusive approach will create more meaningful community connections.\n\nBest regards,"
            }
        }
    },
    "Shopping & Consumer": {
        "Part 1": [
            { question: "Do you prefer shopping online or in stores?", suggestion: "<b>Câu mẫu:</b> I prefer shopping online because it's convenient." },
            { question: "What's your favorite thing to buy?", suggestion: "<b>Câu mẫu:</b> I enjoy buying books and clothes." },
            { question: "Do you compare prices before buying?", suggestion: "<b>Câu mẫu:</b> Yes, I always check different stores for better prices." },
            { question: "How often do you go to shopping malls?", suggestion: "<b>Câu mẫu:</b> I go to shopping malls about once a month." },
            { question: "Do you use coupons or discount codes?", suggestion: "<b>Câu mẫu:</b> Yes, I always look for discounts before purchasing." }
        ],
        "Part 2": [
            { question: "How do you make purchasing decisions?", suggestion: "<b>Cấu trúc:</b> When making purchasing decisions, I... I also consider...<br><b>Từ vựng:</b> research products, read reviews, compare prices, consider quality, check return policies.<br><b>Câu mẫu:</b> When making purchasing decisions, I always research products thoroughly and read customer reviews. I also consider the quality versus price ratio and check return policies in case the product doesn't meet my expectations." }
        ],
        "Part 3": [
            { question: "Has online shopping changed consumer behavior?", suggestion: "<b>Cấu trúc:</b> Online shopping has dramatically changed how we shop... Consumers now... However, this has also led to...<br><b>Từ vựng:</b> impulse buying, price comparison, global marketplace, convenience, environmental impact.<br><b>Câu mẫu:</b> Online shopping has dramatically changed how we shop by making it more convenient and giving us access to a global marketplace. Consumers now compare prices easily and can shop anytime. However, this has also led to more impulse buying and packaging waste." },
            { question: "Should there be more regulations on advertising?", suggestion: "<b>Cấu trúc:</b> I believe advertising regulations are important because... Consumers need protection from... while businesses should be able to...<br><b>Từ vựng:</b> misleading claims, consumer protection, honest marketing, fair competition, informed choices.<br><b>Câu mẫu:</b> I believe advertising regulations are important because consumers need protection from misleading claims and false promises. Regulations ensure honest marketing practices and fair competition, while still allowing businesses to promote their products effectively." }
        ],
        "Part 4": {
            scenario: "Our consumer rights club wants to educate people about smart shopping. Should we focus on budgeting and saving money or on identifying quality products? What are your recommendations?",
            friend_email: {
                prompt: "Write an email to your friend about your opinion (50 words).",
                suggestion: "<b>Nội dung:</b> Bày tỏ sự quan tâm (I'm interested in the consumer education project). Đưa ra lựa chọn (I think budgeting is more important) và lý do (helps with financial planning, affects everyone).",
                sample: "Hi Jordan,\n\nI'm really interested in our consumer rights club's education project! I think we should focus on budgeting and saving money because it helps people with overall financial planning and affects everyone regardless of income level. Good budgeting skills are foundational for all purchasing decisions.\n\nYour thoughts?\n\nBest,"
            },
            manager_email: {
                prompt: "Write an email to the manager with your suggestions (120-150 words).",
                suggestion: "<b>Thân bài:</b> Đưa ra lựa chọn (focus on budgeting) và các lý do (universal need, financial literacy, long-term impact). Đề xuất các chủ đề (budget planning, saving strategies, debt management).",
                sample: "Dear Manager,\n\nMy name is Cameron. I have been a dedicated member of the consumer rights club for nine months. I am writing regarding our upcoming consumer education initiative.\n\nI am very supportive of this important project to help people become smarter consumers. While both budgeting and product quality assessment are valuable, I recommend focusing on budgeting and money-saving strategies for several reasons. First, financial literacy is a universal need that affects people of all income levels. Second, good budgeting skills have long-term impacts on people's overall financial health. Third, many consumer problems stem from poor financial planning.\n\nI suggest covering topics like budget planning, saving strategies, debt management, and understanding the true cost of purchases including interest and fees. These skills will empower people to make better financial decisions throughout their lives.\n\nI believe this approach will provide the most comprehensive benefit to our community.\n\nBest regards,"
            }
        }
    }
};

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = practiceData;
}
