<script>
import { ref } from "vue";

import List from "@/components/List.vue";

export default {
  setup() {
    const LocalQuestion = "Q_KTMT";
    const LocalId = ref(null);
    const search = ref("");
    const Text = ref("");
    const List = ref([]);

    const fakeList = [
      {
        id: 0,
        question:
          "Phân loại máy tính như nào: Theo mục đích sử dụng,…g nghệ, đặc trưng thiết kế, theo năng lực sử dụng",
      },
      {
        id: 1,
        question:
          "Khối chức năng chính của máy tính: Bộ nhớ chính(RA…ý trung tâm(CPU, CU), thiết bị vào, thiết bị ra. ",
      },
      {
        id: 2,
        question:
          "Kiến trúc tập lệnh: Kiến trúc tập lệnh là cấu trúc…ải hiểu để viết một chương trình chuẩn cho máy đó",
      },
      { id: 3, question: "RAM : bộ nhớ truy cập ngẫu nhiên" },
      {
        id: 4,
        question:
          "Tác dụng của Bus: Cho phép tín hiệu có thể di chuyển giữa các module của máy tính với nhau",
      },
      {
        id: 5,
        question:
          "Đơn vị điều khiển (CU – Control Unit): điều khiển hoạt động của máy tính theo chương trình định sẵn",
      },
      {
        id: 6,
        question:
          "Chức năng của bộ xử lý trung tâm CPU: Điều khiển h…oạt động theo chương trình nằm trong bộ nhớ chính",
      },
      {
        id: 7,
        question:
          " Các khía cạnh liên quan đến kiến trúc máy tính: Kiến trúc tập lệnh và tổ chức máy tính",
      },
      {
        id: 8,
        question:
          "MIMD thuộc loại máy tính: Nhiều dòng lệnh, nhiều dòng số liệu",
      },
      {
        id: 9,
        question: "MISD thuộc loại máy tính: Nhiều dòng lệnh, một dòng số liệu",
      },
      {
        id: 10,
        question: "SISD thuộc loại máy tính Một dòng lệnh, một dòng số liệu.",
      },
      {
        id: 11,
        question:
          "bus dữ liệu làm nhiệm vụ đọc/ghi dữ liệu giữa chip vi xử lý và bộ nhớ",
      },
      {
        id: 12,
        question:
          "Cấu trúc chung của một mã lệnh: Tiền tố, Mã toán, Toán hạng, Địa chỉ trực tiếp",
      },
      {
        id: 13,
        question:
          "Ngăn xếp stack là vùng nhớ có cấu trúc LIFO (last in first out) vào sau ra trước",
      },
      { id: 14, question: "stack: Đỉnh ngăn xếp có thể bị thay đổi" },
      {
        id: 15,
        question:
          "Thanh ghi dữ liệu Chứa các dữ liệu tạm thời hoặc kết quả trung gian",
      },
      {
        id: 16,
        question:
          "Thanh ghi trạng thái (Status Register): – Chứa các thông tin trạng thái của CPU",
      },
      {
        id: 17,
        question:
          "bus điều khiển làm nhiệm vụ điều khiển các tín hiệu đọc/ghi dữ liệu giữa chip vi xử lý và bộ nhớ",
      },
      {
        id: 18,
        question:
          "đơn vị tính toán số học và logic (ALU) có nhiệm vụ… thể, theo sự điều khiển của đơn vị điều khiển CU",
      },
      { id: 19, question: "CPU : 4 bước tìm nạp, giải mã, thực thi, lưu trữ" },
      {
        id: 20,
        question:
          "5 quy trình: lấy lệnh IF, giải mã ID, nạp tham số OF, thực hiện lệnh EX, ghi kết quả OW",
      },
      {
        id: 21,
        question:
          "hazards - pipeline: 3 loại Structural hazard (xung…ột dữ liệu), Control hazard (xung đột điều khiển)",
      },
      {
        id: 22,
        question:
          "Bộ nhớ cache là bộ nhớ trung gian trong quá trình … bộ nhớ chính nhằm làm tăng tốc độ xử lý của CPU.",
      },
      { id: 26, question: "pipeline : thực hiện lệnh gối chồng lên nhau" },
      {
        id: 27,
        question: "pipeline : cải tiến hiệu suất CPU, tăng tốc độ xử lý ",
      },
      { id: 28, question: "pipeline: 2 loại pipeline tĩnh, động" },
      {
        id: 29,
        question:
          "Hệ tổ hợp: hệ mà tín hiệu ra chỉ phụ thuộc tín hiệ…tổ hợp thực hiện bằng những phần tử logic cơ bản.",
      },
      {
        id: 30,
        question:
          "Hệ dãy: là hệ mà tín hiệu ra không chỉ phụ thuộc t…ớ. Ngoài ra có thể thêm các phần tử logic cơ bản.",
      },
      {
        id: 31,
        question:
          "Các chức năng chính của module vào ra (I/O): Điều …iao tiếp với thiết bị, Đệm dữ liệu, Phát hiện lỗi",
      },
      {
        id: 32,
        question:
          "Giao tiếp với bộ xử lý: giải mã lệnh, dữ liệu, báo cáo trạng thái, nhận dạng địa chỉ.",
      },
      { id: 33, question: "cấu hình nối ghép: Điểm-Điểm, Điểm-Đa Điểm" },
      {
        id: 34,
        question:
          "LRU chọn trang không được dùng trong một khoảng thời gian lâu nhất.",
      },
      {
        id: 35,
        question:
          "Bus địa chỉ (Address bus): vận chuyển địa chỉ xác định ngăn nhớ hay cổng vào ra",
      },
    ];

    console.log(fakeList);

    const LoadQuestionsLocalStorage = () => {
      LocalId.value = JSON.parse(localStorage.getItem("id")) || 36;
      List.value = JSON.parse(localStorage.getItem(LocalQuestion)) || fakeList;
    };

    const SetQuestionLocalStorage = () => {
      localStorage.setItem(LocalQuestion, JSON.stringify(List.value));
      localStorage.setItem("id", LocalId.value);
    };

    LoadQuestionsLocalStorage();

    const AddItem = () => {
      const el = { id: LocalId.value++, question: Text.value };
      if (Text.value) List.value.push(el);
      Text.value = "";
      SetQuestionLocalStorage(el);
    };

    const changeContent = (value) => {
      const objIndex = List.value.findIndex((e) => e.id == value.id);

      if (objIndex != -1) {
        List.value[objIndex].question = value.question;
        SetQuestionLocalStorage();
      }
    };

    return {
      List,
      search,
      Text,
      AddItem,
      changeContent,
      SetQuestionLocalStorage,
    };
  },
  components: {
    List,
  },
};
</script>

<template>
  <div class="flex justify-center mt-6 w-screen">
    <div class="max-w-[800px] w-full shadow max-h-[600px] p-6 bg-white rounded-lg">
      <div class="w-full flex items-center justify-center flex-col">
        <div class="w-full flex gap-10">
          <input
            v-model="Text"
            class="w-full px-4 py-3 border-gray-300 rounded-lg border outline-none"
            type="text"
            placeholder="Dữ liệu cần thêm..."
          />
          <button @click="AddItem" class="bg-sky-600 text-white px-10 py-2 rounded-lg">Add</button>
        </div>
        <div class="mt-6 w-full">
          <input
            placeholder="Tìm kiếm gì đó..."
            class="w-full px-4 py-3 outline-none border-gray-300 border rounded-lg"
            v-model="search"
            type="text"
            name="search"
            id="search"
          />
        </div>
        search: {{ search }}
      </div>
      <List @change="changeContent" :List="List" :search="search" />
    </div>
  </div>
</template>    

