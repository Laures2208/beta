import { Content } from './types';

export const TRANSLATIONS: Record<'vi' | 'en', Content> = {
  vi: {
    hero: {
      title: "Giải Phóng Kim Loại",
      subtitle: "Nguyên tắc khử cation",
      formula: "$M^{n+} + ne \\rightarrow M$",
      description: "Khám phá thế giới luyện kim, từ quặng thô đến những vật liệu tinh khiết định hình thế giới hiện đại."
    },
    ores: {
      title: "Bách Khoa Toàn Thư Về Quặng",
      items: [
        { name: "Hematite", formula: "$Fe_2O_3$", description: "Quặng sắt quan trọng nhất, có màu đỏ đặc trưng.", color: "bg-red-900/40", image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&q=80&w=640" },
        { name: "Bauxite", formula: "$Al_2O_3 \\cdot 2H_2O$", description: "Nguồn nhôm chính, được khai thác lộ thiên.", color: "bg-orange-900/40", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=640" },
        { name: "Chalcopyrite", formula: "$CuFeS_2$", description: "Quặng đồng phổ biến nhất, có ánh kim vàng.", color: "bg-yellow-900/40", image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=640" },
        { name: "Sphalerite", formula: "$ZnS$", description: "Nguồn kẽm chính, thường đi kèm với chì.", color: "bg-zinc-900/40", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?auto=format&fit=crop&q=80&w=640" }
      ]
    },
    methods: {
      title: "Phương Pháp Tách Kim Loại",
      items: [
        {
          name: "Nhiệt Luyện",
          description: "Khử bằng C hoặc CO ở nhiệt độ cao.",
          metals: ["Zn", "Fe", "Sn", "Pb", "Cu"],
          reaction: "$ZnO + C \\xrightarrow{t^o} Zn + CO$"
        },
        {
          name: "Thủy Luyện",
          description: "Dùng kim loại mạnh đẩy kim loại yếu trong dung dịch muối.",
          metals: ["Cu", "Ag", "Au"],
          reaction: "$Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$"
        },
        {
          name: "Điện Phân Nóng Chảy",
          description: "Sử dụng dòng điện một chiều cho kim loại hoạt động mạnh.",
          metals: ["Na", "K", "Ca", "Mg", "Al"],
          reaction: "$2Al_2O_3 \\xrightarrow{dpnc} 4Al + 3O_2$"
        }
      ]
    },
    recycling: {
      title: "Lộ Trình Tái Chế",
      steps: [
        { title: "Thu gom", description: "Tập kết phế liệu từ các nguồn khác nhau." },
        { title: "Phân loại", description: "Tách biệt các loại kim loại và tạp chất." },
        { title: "Nghiền, băm", description: "Giảm kích thước để dễ xử lý." },
        { title: "Luyện kim", description: "Nấu chảy và tinh chế lại kim loại." },
        { title: "Tạo vật liệu", description: "Đúc thành phôi hoặc sản phẩm mới." },
        { title: "Vận chuyển", description: "Đưa sản phẩm đến nơi tiêu thụ." }
      ]
    },
    practice: {
      title: "Bài Tập Thực Hành",
      instruction: "Kéo thả kim loại vào phương pháp tách tương ứng.",
      check: "Kiểm tra",
      reset: "Làm lại",
      correct: "Chính xác!",
      incorrect: "Chưa đúng, hãy thử lại."
    },
    test: {
      title: "Kiểm Tra Kiến Thức",
      start: "Bắt đầu bài thi",
      next: "Câu tiếp theo",
      finish: "Hoàn thành",
      score: "Kết quả của bạn",
      questions: [
        { question: "Phương pháp nào dùng để điều chế Al?", options: ["Nhiệt luyện", "Thủy luyện", "Điện phân nóng chảy", "Điện phân dung dịch"], answer: 2 },
        { question: "Quặng Hematite có công thức là gì?", options: ["Fe3O4", "Fe2O3", "FeS2", "FeCO3"], answer: 1 },
        { question: "Chất khử phổ biến trong nhiệt luyện là gì?", options: ["CO", "H2O", "O2", "NaCl"], answer: 0 },
        { question: "Thủy luyện thường dùng để điều chế kim loại nào?", options: ["Na", "Al", "Mg", "Ag"], answer: 3 },
        { question: "Nguyên tắc chung của luyện kim là gì?", options: ["Oxy hóa cation", "Khử cation", "Oxy hóa nguyên tử", "Khử nguyên tử"], answer: 1 },
        { question: "Quặng Bauxite là nguồn chính của kim loại nào?", options: ["Sắt", "Đồng", "Nhôm", "Kẽm"], answer: 2 },
        { question: "Phản ứng $ZnO + C \\rightarrow Zn + CO$ thuộc phương pháp nào?", options: ["Nhiệt luyện", "Thủy luyện", "Điện phân", "Nhiệt phân"], answer: 0 },
        { question: "Kim loại nhóm IA được điều chế bằng cách nào?", options: ["Nhiệt luyện", "Thủy luyện", "Điện phân nóng chảy", "Điện phân dung dịch"], answer: 2 },
        { question: "Tái chế kim loại giúp ích gì?", options: ["Tiết kiệm năng lượng", "Bảo vệ môi trường", "Giảm khai thác quặng", "Tất cả các ý trên"], answer: 3 },
        { question: "Công thức của quặng Chalcopyrite là gì?", options: ["CuS", "Cu2S", "CuFeS2", "Cu2O"], answer: 2 }
      ]
    },
    admin: {
      title: "Quản Trị Bài Thi",
      addQuestion: "Thêm câu hỏi",
      editQuestion: "Sửa câu hỏi",
      deleteQuestion: "Xóa câu hỏi",
      save: "Lưu",
      cancel: "Hủy",
      questionLabel: "Câu hỏi",
      optionsLabel: "Các lựa chọn",
      correctAnswerLabel: "Đáp án đúng (0-3)",
      noQuestions: "Chưa có câu hỏi nào."
    },
    chat: {
      title: "Gia Sư AI (Giáo Sư Luyện Kim)",
      placeholder: "Hỏi tôi về hóa học luyện kim...",
      send: "Gửi",
      systemPrompt: "Bạn là một giáo sư luyện kim tận tâm. Hãy trả lời các câu hỏi về hóa học, quặng và các phương pháp tách kim loại một cách khoa học và dễ hiểu bằng tiếng Việt."
    }
  },
  en: {
    hero: {
      title: "Metal Liberation",
      subtitle: "Cation Reduction Principle",
      formula: "$M^{n+} + ne \\rightarrow M$",
      description: "Explore the world of metallurgy, from raw ores to the pure materials that shape our modern world."
    },
    ores: {
      title: "Ore Encyclopedia",
      items: [
        { name: "Hematite", formula: "$Fe_2O_3$", description: "The most important iron ore, characterized by its red color.", color: "bg-red-900/40", image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&q=80&w=640" },
        { name: "Bauxite", formula: "$Al_2O_3 \\cdot 2H_2O$", description: "The main source of aluminum, often mined in open pits.", color: "bg-orange-900/40", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=640" },
        { name: "Chalcopyrite", formula: "$CuFeS_2$", description: "The most common copper ore, with a golden metallic luster.", color: "bg-yellow-900/40", image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=640" },
        { name: "Sphalerite", formula: "$ZnS$", description: "The main source of zinc, often found with lead.", color: "bg-zinc-900/40", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?auto=format&fit=crop&q=80&w=640" }
      ]
    },
    methods: {
      title: "Metal Extraction Methods",
      items: [
        {
          name: "Pyrometallurgy",
          description: "Reduction using C or CO at high temperatures.",
          metals: ["Zn", "Fe", "Sn", "Pb", "Cu"],
          reaction: "$ZnO + C \\xrightarrow{t^o} Zn + CO$"
        },
        {
          name: "Hydrometallurgy",
          description: "Using a more reactive metal to displace a less reactive one in salt solution.",
          metals: ["Cu", "Ag", "Au"],
          reaction: "$Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$"
        },
        {
          name: "Electrometallurgy",
          description: "Using direct current for highly reactive metals.",
          metals: ["Na", "K", "Ca", "Mg", "Al"],
          reaction: "$2Al_2O_3 \\xrightarrow{dpnc} 4Al + 3O_2$"
        }
      ]
    },
    recycling: {
      title: "Recycling Roadmap",
      steps: [
        { title: "Collection", description: "Gathering scrap metal from various sources." },
        { title: "Sorting", description: "Separating different metals and impurities." },
        { title: "Shredding", description: "Reducing size for easier processing." },
        { title: "Smelting", description: "Melting and refining the metal." },
        { title: "Manufacturing", description: "Casting into new billets or products." },
        { title: "Transport", description: "Delivering products to consumers." }
      ]
    },
    practice: {
      title: "Practice Exercise",
      instruction: "Drag and drop metals into their corresponding extraction method.",
      check: "Check",
      reset: "Reset",
      correct: "Correct!",
      incorrect: "Not quite, try again."
    },
    test: {
      title: "Knowledge Test",
      start: "Start Test",
      next: "Next Question",
      finish: "Finish",
      score: "Your Score",
      questions: [
        { question: "Which method is used to produce Al?", options: ["Pyrometallurgy", "Hydrometallurgy", "Molten Electrolysis", "Solution Electrolysis"], answer: 2 },
        { question: "What is the formula for Hematite?", options: ["Fe3O4", "Fe2O3", "FeS2", "FeCO3"], answer: 1 },
        { question: "What is a common reducing agent in pyrometallurgy?", options: ["CO", "H2O", "O2", "NaCl"], answer: 0 },
        { question: "Hydrometallurgy is often used for which metal?", options: ["Na", "Al", "Mg", "Ag"], answer: 3 },
        { question: "What is the general principle of metallurgy?", options: ["Cation oxidation", "Cation reduction", "Atom oxidation", "Atom reduction"], answer: 1 },
        { question: "Bauxite is the main source of which metal?", options: ["Iron", "Copper", "Aluminum", "Zinc"], answer: 2 },
        { question: "The reaction $ZnO + C \\rightarrow Zn + CO$ belongs to which method?", options: ["Pyrometallurgy", "Hydrometallurgy", "Electrolysis", "Pyrolysis"], answer: 0 },
        { question: "How are Group IA metals produced?", options: ["Pyrometallurgy", "Hydrometallurgy", "Molten Electrolysis", "Solution Electrolysis"], answer: 2 },
        { question: "What are the benefits of metal recycling?", options: ["Saves energy", "Protects environment", "Reduces ore mining", "All of the above"], answer: 3 },
        { question: "What is the formula for Chalcopyrite?", options: ["CuS", "Cu2S", "CuFeS2", "Cu2O"], answer: 2 }
      ]
    },
    admin: {
      title: "Test Administration",
      addQuestion: "Add Question",
      editQuestion: "Edit Question",
      deleteQuestion: "Delete Question",
      save: "Save",
      cancel: "Cancel",
      questionLabel: "Question",
      optionsLabel: "Options",
      correctAnswerLabel: "Correct Answer (0-3)",
      noQuestions: "No questions yet."
    },
    chat: {
      title: "AI Tutor (Metallurgy Professor)",
      placeholder: "Ask me about metallurgy chemistry...",
      send: "Send",
      systemPrompt: "You are a dedicated metallurgy professor. Answer questions about chemistry, ores, and metal extraction methods scientifically and clearly in English."
    }
  }
};
