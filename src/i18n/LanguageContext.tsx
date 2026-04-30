import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "vi" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const dict: Record<Lang, Record<string, string>> = {
  vi: {
    // Nav
    "nav.about": "Giới thiệu",
    "nav.courses": "Khóa học",
    "nav.ielts": "Luyện IELTS",
    "nav.gallery": "Hình ảnh",
    "nav.videos": "Video",
    "nav.branches": "Cơ sở",
    "nav.contact": "Liên hệ",
    "nav.enroll": "Đăng ký ngay",
    "nav.tagline": "Học tiếng Anh tự tin",

    // Hero
    "hero.badge": "Hơn 300 học viên tin tưởng",
    "hero.title.main": "Học tiếng Anh tự tin",
    "hero.title.accent": "cùng trung tâm",
    "hero.subtitle":
      "Trung tâm Anh ngữ uy tín với các khóa học cho mọi lứa tuổi, giúp học viên phát triển toàn diện kỹ năng giao tiếp và học thuật.",
    "hero.cta.courses": "Xem khóa học",
    "hero.cta.contact": "Liên hệ ngay",
    "hero.stat.students": "Học viên",
    "hero.stat.years": "Năm kinh nghiệm",
    "hero.stat.rating": "Đánh giá",
    "hero.float.ielts.label": "IELTS trung bình",
    "hero.float.ielts.value": "7.5+ band",
    "hero.float.parent.label": "Phụ huynh đánh giá",
    "hero.float.parent.value": "4.9 / 5.0",

    // About
    "about.kicker": "Giới thiệu",
    "about.title.main": "Nơi tuyệt vời để",
    "about.title.accent": "phát triển tiếng Anh",
    "about.desc":
      "Chúng tôi là trung tâm Anh ngữ hiện đại, thân thiện tại Bà Rịa & Vũng Tàu. Hơn 3 năm qua, chúng tôi đã giúp các bé mầm non, học sinh và người lớn tự tin giao tiếp tiếng Anh — qua các lớp học sinh động, đội ngũ giáo viên tận tâm và lộ trình rõ ràng được phụ huynh tin tưởng.",
    "about.tag.caring": "Giáo viên tận tâm",
    "about.tag.results": "Kết quả thực tế",
    "about.tag.global": "Chuẩn quốc tế",
    "about.stat.years": "Năm giảng dạy",
    "about.stat.branches": "Cơ sở tại Bà Rịa & Vũng Tàu",
    "about.stat.students": "Học viên đang học",
    "about.stat.parents": "Phụ huynh hài lòng",

    // Benefits
    "benefits.kicker": "Vì sao chọn chúng tôi",
    "benefits.title.main": "Lợi ích",
    "benefits.title.accent": "thực sự, giá trị thực tế",
    "benefits.desc":
      "Chúng tôi đầu tư cho học viên với ưu đãi học phí, tài liệu miễn phí và buổi học bổ sung — đồng hành cùng bạn trên mọi chặng đường.",
    "benefits.1.title": "Giảm 10% vào các tháng ưu đãi",
    "benefits.1.desc": "Ưu đãi học phí lên đến 10% trong các tháng đặc biệt trong năm.",
    "benefits.2.title": "Tặng tài liệu miễn phí",
    "benefits.2.desc": "Nhận sách giáo trình, sách bài tập và tài liệu online miễn phí trong các kỳ ưu đãi.",
    "benefits.3.title": "Lớp ôn tập miễn phí",
    "benefits.3.desc": "Buổi ôn tập đặc biệt giúp học viên chuẩn bị cho kỳ thi trên trường — hoàn toàn miễn phí.",
    "benefits.4.title": "1 buổi luyện thi IELTS miễn phí",
    "benefits.4.desc": "Mỗi học viên IELTS được tặng thêm 1 buổi luyện thi chuyên sâu để tối ưu điểm số.",

    // Courses
    "courses.kicker": "Khóa học",
    "courses.title.main": "Chương trình cho",
    "courses.title.accent": "mọi lứa tuổi & mục tiêu",
    "courses.intro":
      "Từ những từ tiếng Anh đầu tiên của bé đến IELTS Band 8 tự tin — đều có lớp phù hợp cho bạn.",
    "courses.duration": "Thời lượng",
    "courses.age": "Đối tượng",
    "courses.bonus": "Ưu đãi:",
    "courses.cta": "Đăng ký ngay",
    "courses.1.title": "IELTS",
    "courses.1.tag": "General & Academic",
    "courses.1.desc": "Luyện IELTS toàn diện 4 kỹ năng với đề thi thử, chiến lược và phản hồi cá nhân hóa.",
    "courses.1.duration": "4 tháng",
    "courses.1.age": "Thiếu niên & Người lớn",
    "courses.1.extra": "Tặng 1 buổi luyện thi miễn phí",
    "courses.2.title": "Giao tiếp người lớn",
    "courses.2.tag": "Tự tin giao tiếp",
    "courses.2.desc": "Tiếng Anh thực tế cho người đi làm — phát âm, chủ đề đời sống và kỹ năng thuyết trình.",
    "courses.2.duration": "4 tháng",
    "courses.2.age": "Người lớn 18+",
    "courses.3.title": "Cambridge",
    "courses.3.tag": "Starters · Movers · Flyers · KET · PET",
    "courses.3.desc": "Chứng chỉ Cambridge English được công nhận quốc tế, mở ra thế giới cho con bạn.",
    "courses.3.duration": "Theo kỳ",
    "courses.3.age": "7–14 tuổi",
    "courses.4.title": "Lớp Mầm non",
    "courses.4.tag": "Bé yêu tiếng Anh",
    "courses.4.desc": "Bài hát, trò chơi và câu chuyện giúp bé làm quen tiếng Anh qua hoạt động vui nhộn.",
    "courses.4.duration": "3 tháng",
    "courses.4.age": "4–5 tuổi",
    "courses.5.title": "Lớp Thiếu nhi",
    "courses.5.tag": "Nền tảng vững chắc",
    "courses.5.desc": "Xây dựng từ vựng, phát âm và ngữ pháp vững chắc qua các bài học tương tác vui vẻ.",
    "courses.5.duration": "3 tháng",
    "courses.5.age": "6–10 tuổi",
    "courses.6.title": "Lớp Thiếu niên",
    "courses.6.tag": "Nâng tầm",
    "courses.6.desc": "Bài học theo dự án giúp phát triển toàn diện 4 kỹ năng và chuẩn bị cho các kỳ thi quốc tế.",
    "courses.6.duration": "3 tháng",
    "courses.6.age": "11–14 tuổi",

    // Gallery
    "gallery.kicker": "Cộng đồng",
    "gallery.title.main": "Khoảnh khắc từ",
    "gallery.title.accent": "lớp học của chúng tôi",
    "gallery.desc": "Bước vào — học vui, luyện tập tập trung và những thành tích đáng tự hào.",

    // Videos
    "videos.kicker": "Video",
    "videos.title.main": "Học vui",
    "videos.title.accent": "trong lớp học",
    "videos.desc": "Khám phá hoạt động lớp học, học viên thuyết trình và sự tương tác giữa giáo viên và học viên.",
    "videos.1.title": "Học viên thuyết trình",
    "videos.2.title": "Hoạt động vui nhộn",
    "videos.3.title": "Giáo viên & học viên",

    // Branches
    "branches.kicker": "Tìm chúng tôi",
    "branches.title.main": "Ba cơ sở tại",
    "branches.title.accent": "Bà Rịa & Vũng Tàu",
    "branches.desc": "Ghé cơ sở gần bạn nhất — chúng tôi rất mong được gặp bạn.",
    "branches.directions": "Chỉ đường",
    "branches.cn1.address": "218 Nguyễn Hữu Thọ",
    "branches.cn1.city": "Bà Rịa",
    "branches.cn2.address": "492 Điện Biên Phủ, Long Toàn",
    "branches.cn2.city": "Bà Rịa",
    "branches.cn3.address": "420 Trương Công Định",
    "branches.cn3.city": "Vũng Tàu",

    // Contact
    "contact.kicker": "Liên hệ",
    "contact.title.main": "Sẵn sàng",
    "contact.title.accent": "đăng ký",
    "contact.title.tail": "? Gửi tin nhắn cho chúng tôi.",
    "contact.desc": "Có câu hỏi về khóa học, lịch học hay học phí? Gửi tin nhắn — đội ngũ của chúng tôi phản hồi trong vài giờ.",
    "contact.call": "Gọi ngay",
    "contact.message": "Nhắn tin",
    "contact.zalo": "Chat Zalo",
    "contact.form.title": "Gửi tin nhắn",
    "contact.form.subtitle": "Chúng tôi phản hồi trong vài giờ.",
    "contact.form.name": "Họ và tên",
    "contact.form.name.placeholder": "Tên của bạn",
    "contact.form.phone": "Số điện thoại",
    "contact.form.message": "Nội dung",
    "contact.form.message.placeholder": "Tôi muốn tìm hiểu thêm về khóa IELTS...",
    "contact.form.send": "Gửi tin nhắn",
    "contact.form.sending": "Đang gửi...",
    "contact.toast.success": "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.",
    "contact.toast.name": "Vui lòng nhập tên của bạn",
    "contact.toast.phone": "Vui lòng nhập số điện thoại hợp lệ",
    "contact.toast.message": "Vui lòng nhập nội dung",

    // Footer
    "footer.tagline": "Đồng hành cùng học viên mọi lứa tuổi tự tin nói tiếng Anh — tại Bà Rịa & Vũng Tàu.",
    "footer.quicklinks": "Liên kết nhanh",
    "footer.courses": "Khóa học",
    "footer.contact": "Liên hệ",
    "footer.rights": "Đã đăng ký bản quyền.",
    "footer.love": "Tự hào đồng hành cùng học viên Việt Nam ♥",
  },
  en: {
    "nav.about": "About",
    "nav.courses": "Courses",
    "nav.ielts": "IELTS Practice",
    "nav.gallery": "Gallery",
    "nav.videos": "Videos",
    "nav.branches": "Branches",
    "nav.contact": "Contact",
    "nav.enroll": "Enroll Now",
    "nav.tagline": "Learn English with Confidence",

    "hero.badge": "Trusted by 300+ students",
    "hero.title.main": "Learn English with",
    "hero.title.accent": "Confidence",
    "hero.subtitle":
      "A trusted English center with courses for every age — helping students develop both communication and academic skills.",
    "hero.cta.courses": "View Courses",
    "hero.cta.contact": "Contact Us",
    "hero.stat.students": "Students",
    "hero.stat.years": "Years experience",
    "hero.stat.rating": "Rating",
    "hero.float.ielts.label": "Average IELTS",
    "hero.float.ielts.value": "7.5+ band",
    "hero.float.parent.label": "Parent rating",
    "hero.float.parent.value": "4.9 / 5.0",

    "about.kicker": "About us",
    "about.title.main": "A bright place to",
    "about.title.accent": "grow your English",
    "about.desc":
      "We are a modern, friendly English center in Ba Ria & Vung Tau. For over 3 years we have helped kindergarteners, school students and adults speak English with confidence.",
    "about.tag.caring": "Caring teachers",
    "about.tag.results": "Real results",
    "about.tag.global": "Global standards",
    "about.stat.years": "Years of teaching",
    "about.stat.branches": "Branches in Ba Ria & Vung Tau",
    "about.stat.students": "Active students",
    "about.stat.parents": "Happy parents",

    "benefits.kicker": "Why choose us",
    "benefits.title.main": "Real",
    "benefits.title.accent": "benefits, real value",
    "benefits.desc":
      "We invest in our students with promotions, free materials and bonus sessions — supporting you every step of the way.",
    "benefits.1.title": "10% off in special months",
    "benefits.1.desc": "Enjoy promotions of up to 10% off tuition during selected months.",
    "benefits.2.title": "Free learning materials",
    "benefits.2.desc": "Receive textbooks, workbooks and online resources for free during enrollment periods.",
    "benefits.3.title": "Free school exam review",
    "benefits.3.desc": "Special review sessions to help students prepare for school tests — completely free.",
    "benefits.4.title": "1 free IELTS test lesson",
    "benefits.4.desc": "Every IELTS student gets one extra in-depth practice session to maximize their score.",

    "courses.kicker": "Courses",
    "courses.title.main": "Programs for",
    "courses.title.accent": "every age & goal",
    "courses.intro":
      "From your child's first English words to a confident IELTS Band 8 — we have a class for you.",
    "courses.duration": "Duration",
    "courses.age": "For",
    "courses.bonus": "Bonus:",
    "courses.cta": "Enroll Now",
    "courses.1.title": "IELTS",
    "courses.1.tag": "General & Academic",
    "courses.1.desc": "Comprehensive IELTS training across all 4 skills with mock tests, strategy and personal feedback.",
    "courses.1.duration": "4 months",
    "courses.1.age": "Teens & Adults",
    "courses.1.extra": "1 free test lesson included",
    "courses.2.title": "Adult Communication",
    "courses.2.tag": "Speak with confidence",
    "courses.2.desc": "Practical English for working adults — pronunciation, real-life topics and presentation skills.",
    "courses.2.duration": "4 months",
    "courses.2.age": "Adults 18+",
    "courses.3.title": "Cambridge",
    "courses.3.tag": "Starters · Movers · Flyers · KET · PET",
    "courses.3.desc": "Internationally recognized Cambridge English certificates that open the world for your child.",
    "courses.3.duration": "By term",
    "courses.3.age": "7–14 years",
    "courses.4.title": "Kindy",
    "courses.4.tag": "Little learners",
    "courses.4.desc": "Songs, games and stories that introduce English through joyful, playful activities.",
    "courses.4.duration": "3 months",
    "courses.4.age": "4–5 years",
    "courses.5.title": "Kids",
    "courses.5.tag": "Strong foundations",
    "courses.5.desc": "Build solid vocabulary, pronunciation and grammar through fun, interactive lessons.",
    "courses.5.duration": "3 months",
    "courses.5.age": "6–10 years",
    "courses.6.title": "Teen",
    "courses.6.tag": "Level up",
    "courses.6.desc": "Project-based lessons that strengthen all 4 skills and prepare for international exams.",
    "courses.6.duration": "3 months",
    "courses.6.age": "11–14 years",

    "gallery.kicker": "Our community",
    "gallery.title.main": "Moments from",
    "gallery.title.accent": "our classroom",
    "gallery.desc": "Step inside — joyful learning, focused practice and proud achievements.",

    "videos.kicker": "Videos",
    "videos.title.main": "Joyful learning",
    "videos.title.accent": "in our classroom",
    "videos.desc": "Discover classroom activities, student presentations and lively teacher–student interaction.",
    "videos.1.title": "Student presentations",
    "videos.2.title": "Fun activities",
    "videos.3.title": "Teacher & students",

    "branches.kicker": "Find us",
    "branches.title.main": "Three branches in",
    "branches.title.accent": "Ba Ria & Vung Tau",
    "branches.desc": "Visit the branch closest to you — we look forward to welcoming you.",
    "branches.directions": "Directions",
    "branches.cn1.address": "218 Nguyen Huu Tho",
    "branches.cn1.city": "Ba Ria",
    "branches.cn2.address": "492 Dien Bien Phu, Long Toan",
    "branches.cn2.city": "Ba Ria",
    "branches.cn3.address": "420 Truong Cong Dinh",
    "branches.cn3.city": "Vung Tau",

    "contact.kicker": "Contact",
    "contact.title.main": "Ready to",
    "contact.title.accent": "enroll",
    "contact.title.tail": "? Send us a message.",
    "contact.desc": "Questions about courses, schedule or tuition? Send a message — our team replies within hours.",
    "contact.call": "Call now",
    "contact.message": "Message",
    "contact.zalo": "Chat on Zalo",
    "contact.form.title": "Send a message",
    "contact.form.subtitle": "We'll reply within hours.",
    "contact.form.name": "Full name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.phone": "Phone number",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "I'd like to learn more about the IELTS course...",
    "contact.form.send": "Send message",
    "contact.form.sending": "Sending...",
    "contact.toast.success": "Thank you! We will contact you very soon.",
    "contact.toast.name": "Please enter your name",
    "contact.toast.phone": "Please enter a valid phone number",
    "contact.toast.message": "Please enter a message",

    "footer.tagline": "Helping learners of every age speak English with confidence — in Ba Ria & Vung Tau.",
    "footer.quicklinks": "Quick links",
    "footer.courses": "Courses",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.love": "Proud to support learners in Vietnam ♥",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "vi" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
    document.documentElement.lang = l;
  };

  const t = (key: string) => dict[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};