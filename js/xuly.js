document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn gửi yêu cầu mặc định của trình duyệt

        // Lấy giá trị từ các trường nhập liệu
        var hoTen = document.getElementById("hoTen").value;
        var email = document.getElementById("email").value;
        var sdt = document.getElementById("sdt").value;
        var pswd = document.getElementById("pwd").value;

        // Kiểm tra xem các trường có được điền đầy đủ không
        if (hoTen === "" || email === "" || sdt === "" || pswd === "") {
            alert("Vui lòng điền đầy đủ thông tin!");
            return; // Dừng hàm nếu thông tin chưa đầy đủ
        }

        // Kiểm tra tính hợp lệ của địa chỉ email
        if (!validateEmail(email)) {
            alert("Email không hợp lệ!");
            return; // Dừng hàm nếu email không hợp lệ
        }

        // Kiểm tra tính hợp lệ của số điện thoại
        if (!validatePhoneNumber(sdt)) {
            alert("Số điện thoại không hợp lệ!");
            return; // Dừng hàm nếu số điện thoại không hợp lệ
        }

        // Nếu thông tin đầy đủ và hợp lệ, có thể gửi yêu cầu đăng ký tới máy chủ ở đây
        // Ví dụ: sử dụng XMLHttpRequest hoặc fetch API để gửi yêu cầu đăng ký

        // Sau khi gửi yêu cầu thành công, bạn có thể thực hiện các hành động tiếp theo như hiển thị thông báo thành công
        alert("Đăng ký thành công!");
        form.reset(); // Xóa nội dung của form sau khi đăng ký thành công
    });

    // Hàm kiểm tra tính hợp lệ của địa chỉ email
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Hàm kiểm tra tính hợp lệ của số điện thoại
    function validatePhoneNumber(phoneNumber) {
        var re = /^[0-9]{10}$/;
        return re.test(phoneNumber);
    }
});

