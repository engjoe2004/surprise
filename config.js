/* =====================================================================
   config.js — THE ONLY FILE YOU NEED TO EDIT.
   Change the text between the quotes "..." and keep the commas.
   If a photo / video / song file is not found, a labeled placeholder is shown.
   ===================================================================== */
const CONFIG = {
  herName: "بطتييي",            // her name
  yourName: "يسوفتك",          // your name (shown under the letter and at the end)
  birthdayDate: "16/10",  // e.g. "٢٠ أكتوبر" or "20 October"
  signOff: "بحبك دايمًا،",        // the words before your name at the bottom of the letter

  // THE LETTER — replace everything between the quotes with YOUR_PERSONAL_MESSAGE.
  // Use \n for a new paragraph.
  letter: "كل سنة وإنتي طيبة يا أحلى حاجة في حياتي. إنتي بتخلي دنيتي أحلى و اجمل بمجرد وجودك فيها. كل ذكرى عشناها سوا غالية عليا أكتر من أي كلام ممكن أقوله. نفسي السنة الجديدة في عمرك تكون سعيده عليكي وتعملي فيها حاجات كتيو ونفضل سوا وكل اللي قلبك بيتمناه. شكرًا إنك جزء حلو وغالي أوي من حياتي. النهاردة يومك، ونفسي تحسي قد إيه إنتي مميزة بجدوهتفضلي مميزه. وهنفضل نعمل ذكريات حلوة أكتر، وضحك أكتر، ولحظات نفتكرها طول العمر. ❤️",

  secretMessage: "إنتي أحلى حاجة حصلتلي في حياتي، وكل يوم بحبك أكتر من اللي قبله 💖",  // shown when she taps the secret heart
  wishMessage: "ربنا يحققلك كل أمنية اتمنيتيها.",                                  // shown after blowing the candles

  // PHOTOS (12). "src" = path to the file inside the images folder.
  // To add a photo: copy one line. To remove: delete its line. Keep the commas.
  photos: [
    { src: "images/photo_1_2026-10-15_21-15-04.jpg", caption: "من الصور المحببه عندي والمميزه و الوحيده واحنا واقفين اصلا", date: "13/2/2024" },
    { src: "images/photo_3_2026-10-15_21-15-04.jpg", caption: "اكتر صوره بحبها في حياتي", date: "13/2/2024" },
    { src: "images/photo_5_2026-10-15_21-15-04.jpg", caption: "تاني مره اشوفك فيها واليوم اللي قررت اعملهاك مفاجاه", date: "17/11/2024" },
    { src: "images/photo_7_2026-10-15_21-15-04.jpg", caption: "بحبها اوي و بحسها كيووت", date: "17/11/2024" },
    { src: "images/photo_10_2026-10-15_21-15-04.jpg", caption: "عسوووله فقولت احطها", date: "17/11/2024" },
    { src: "images/photo_4_2026-10-15_21-15-04.jpg", caption: "تالت مره اشوفك وبعد محايلللله كتيير بس كان يوم عسسسوول اوي", date: "13/7/2025" },
    { src: "images/photo_12_2026-10-15_21-15-04.jpg", caption: "رسمتنا انا وانتي", date: "13/7/2025" },
    { src: "images/photo_2_2026-10-15_21-15-04.jpg", caption: "بحب الصوره دي ", date: "13/7/2025" },
    { src: "images/photo_9_2026-10-15_21-15-04.jpg", caption: "💖💖💖💖", date: "DATE_9" },
    { src: "images/photo_8_2026-10-15_21-15-04.jpg", caption: "اخر مره اتقابلنا وكانت ااقل وقت فيهم", date: "29/7/2026" },
    { src: "images/photo_11_2026-10-15_21-15-04.jpg", caption: "اجمل حد شافته عيني بجد💖💖💖💖", date: "29/7/2026" },
    { src: "images/photo_6_2026-10-15_21-15-04.jpg", caption: "من كتر حلاوة المج اتصورت معاه", date: "29/7/2026" }
  ],

  // VIDEOS (4). "src" = path inside the videos folder (use .mp4, H.264).
  // "poster" = optional thumbnail image, e.g. "images/thumb1.jpg" (leave "" for none).
  videos: [
    { src: "videos/video_2026-10-15_21-40-53 (2).mp4", title: "بحبك💖💖", caption: "بصي الغمزه", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (4).mp4", title: "بحبك💖💖", caption: "يخرابي على الضحكه العسووله", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (5).mp4", title: "بحبك💖💖", caption: "انا بشتكي وميرا بتعمل ايه", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53.mp4", title: "بحبك💖💖", caption: "مخبيه وشك ليه ", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (3).mp4", title: "بحبك💖💖", caption: "يعني لازم زووم على الفرق", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (10).mp4", title: "بحبك💖💖", caption: "ما خلاص بقى الاه", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (6).mp4", title: "بحبك💖💖", caption: "حلاوه وجمال", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (7).mp4", title: "بحبك💖💖", caption: "عسسسوله والله فعلا", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (8).mp4", title: "بحبك💖💖", caption: "النجمه بنفسها فعلا والله", poster: "" },
    { src: "videos/video_2026-10-15_21-40-53 (9).mp4", title: "بحبك💖💖", caption: "بحببببببببببببببكككككككك", poster: "" },
  ],

  // TIMELINE — add or delete lines freely.
  timeline: [
    { date: "13/2/2024", title: "يوم ما اتقابلنا", text: "بدايتنا كانت من لعبه و كانت هى احلى موقف حصل في حياتي لحد دلوقتي و قربنا من بعض لحد ما اتقابلنا في اليوم دا" },
    { date: "17/11/2024", title: "اول مره اجيب حاجه واديهالك ب ايدي لو فاكره", text: "في فديوهات تيك عملناها كانت جامده بردو" },
    { date: "13/2/2024", title: "يوم عمري ما هنساه", text: "اليوم دا اظن غالي عندك وعندي اووي وعمرنا ما هننساه بكل تفاصيله" },
    { date: "النهاردة 16/10", title: "عيد ميلادك", text: "يوم مميز اووي وبحبه اوووي عشان جه فيه احلى واجمل حد في الدنيا" }
  ],

  // MUSIC — put your MP3 in the music folder and match the name here.
  song: "music/7454660815804582673.mp3"
};
