- src/
  - components/: Các common components được sử dụng nhiều nơi trong project
    - Card.jsx
    - Header/
      - Header.jsx
      - Header.module.scss
      - index.js

  - modules/: Các components cấu tạo thành 1 tính năng hoặc 1 trang hoàn chỉnh
    - home/: Tên của module
      - pages/: Các components cấu tạo thành 1 trang trong module
        - Home/
          - Home.jsx
          - Home.module.scss
      - components/: Các components được sử dụng nội bộ bên trong module
        - Banner
        - Showing
        - Cinema

    - details/: module hiển thị chi tiết và đặt vé cho 1 bộ phim
    - auth/: module quản lý xác thực người dùng đăng nhập đăng ký
    - booking/: module quản lý đặt vé

  - apis/: Setup thư viện API và các hàm request API

  - hooks/: Các custom hooks tái sử dụng trong project
  - utils/: Các hàm tái sử dụng trong project
  - styles/: Các file css/scss toàn cục









