var enlarge, data, switchover = false,
    picture = true,
    num_data = 3;

var btn_picture = document.getElementsByClassName('picture')[0],
    btn_data = document.getElementsByClassName('data')[0],
    btn_switchover = document.getElementsByClassName('switchover')[0],
    page_picture = document.getElementsByClassName('page-picture')[0],
    page_data = document.getElementsByClassName('page-data')[0],
    page_switchover = document.getElementsByClassName('page-switchover')[0];

var box = document.getElementsByClassName('box'),
    large = document.getElementsByClassName('large')[0];
var list = document.getElementsByClassName('list')[0],
    del = document.getElementsByClassName('del'),
    add = document.getElementsByClassName('add')[0];

window.onload = function () {
    function change_page(page, page1, page2, btn, btn1, btn2) {
        page.style.display = 'flex';
        page1.style.display = 'none';
        page2.style.display = 'none';
        btn.style.background = '#ccc';
        btn1.style.background = '';
        btn2.style.background = '';
        enlarge = false;
        large.style.display = 'none';
    }
    btn_picture.onclick = function () {
        change_page(page_picture, page_switchover, page_data, btn_picture, btn_switchover, btn_data);
        picture = true, switchover = false, data = false;
    };

    btn_data.onclick = function () {
        for (let j = 0; j < box.length; j++) {
            box[j].style.filter = 'none';
        }
        large.style.display = 'none';
        change_page(page_data, page_switchover, page_picture, btn_data, btn_switchover, btn_picture);
        data = true, picture = false, switchover = false, enlarge = false;
    };

    btn_switchover.onclick = function () {
        for (let j = 0; j < box.length; j++) {
            box[j].style.filter = 'none';
        }
        large.style.display = 'none';
        change_page(page_switchover, page_picture, page_data, btn_switchover, btn_picture, btn_data);
        switchover = true, picture = false, data = false, enlarge = false;
    };

    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function (e) {
            if (!enlarge) {
                e.stopPropagation();
                for (let j = 0; j < box.length; j++) {
                    box[j].style.filter = 'blur(3px)';
                }
                large.style.background = this.getAttribute("id");
                large.style.display = 'block';
                enlarge = true;
            }
        };
    }
    page_picture.onclick = function () {
        if (enlarge) {
            large.style.display = 'none'
            for (let j = 0; j < box.length; j++) {
                box[j].style.filter = 'none';
            }
            enlarge = false;
        }
    };

    function add_del_event(del) {
        del.onmouseover = function () {
            this.style.backgroundColor = 'lightblue';
        };
        del.onmouseout = function () {
            this.style.backgroundColor = '#ccc';
        };
        del.onclick = function () {
            this.parentNode.remove();
            num_data--;
            var i = 1,
                order = document.getElementsByClassName('order');
            for (var j in order) {
                order[j].innerHTML = i++;
            }
        };
    }

    add.onclick = function () {
        if (num_data < 10) {
            var item = document.createElement('div');
            item.classList.add('item');
            var order = document.createElement('div');
            order.classList.add('order');
            order.innerHTML = ++num_data;
            item.appendChild(order);
            var content = document.createElement('div');
            content.classList.add('content');
            item.appendChild(content);
            var del = document.createElement('div');
            del.classList.add('del');
            del.innerHTML = "Delete";
            item.appendChild(del);
            list.appendChild(item);
            add_del_event(del);
        } else {
            alert("too many lists!");
        }
    };

    for (var i in del) {
        add_del_event(del[i]);
    }

};
