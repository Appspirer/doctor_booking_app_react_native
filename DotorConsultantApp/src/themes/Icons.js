import React from "react";
import google from '../assets/svgs/google.svg'
import facebook from '../assets/svgs/facebook.svg'
import check from '../assets/svgs/check.svg'
import eye from '../assets/svgs/eye.svg'
import eye_open from '../assets/svgs/eye_open.svg'
import check_white from '../assets/svgs/check_white.svg'
import home from '../assets/svgs/home.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import heart from '../assets/svgs/heart.svg'
import heart_focus from '../assets/svgs/heart_focus.svg'
import book from '../assets/svgs/book.svg'
import book_focus from '../assets/svgs/book_focus.svg'
import chat from '../assets/svgs/chat.svg'
import chat_focus from '../assets/svgs/chat_focus.svg'
import search from '../assets/svgs/search.svg'
import ic_x from '../assets/svgs/ic_x.svg'
import play from '../assets/svgs/play.svg'
import next_arrow from '../assets/svgs/next_arrow.svg'
import star from '../assets/svgs/star.svg'
import star_gold from '../assets/svgs/star_gold.svg'
import heart_button from '../assets/svgs/heart_button.svg'
import heart_button_red from '../assets/svgs/heart_button_red.svg'
import back from '../assets/svgs/back.svg'
import chat_white from '../assets/svgs/chat_white.svg'
import face from '../assets/svgs/face.svg'
import back_white from '../assets/svgs/back_white.svg'
import next_arrow_white from '../assets/svgs/next_arrow_white.svg'
import like from '../assets/svgs/like.svg'
import phone from '../assets/svgs/phone.svg'
import ic_x_white from '../assets/svgs/ic_x_white.svg'
import my_doctor from '../assets/svgs/my_doctor.svg'
import medical_record from '../assets/svgs/medical_record.svg'
import payment from '../assets/svgs/payment.svg'
import medicine_order from '../assets/svgs/medicine_order.svg'
import test_booking from '../assets/svgs/test_booking.svg'
import privacy_policy from '../assets/svgs/privacy_policy.svg'
import help_center from '../assets/svgs/help_center.svg'
import setting from '../assets/svgs/setting.svg'
import logout from '../assets/svgs/logout.svg'
import edit from '../assets/svgs/edit.svg'
import invoice from '../assets/svgs/invoice.svg'
import prescription from '../assets/svgs/prescription.svg'
import report from '../assets/svgs/report.svg'
import options from '../assets/svgs/options.svg'
import guide from '../assets/svgs/guide.svg'
import order_status from '../assets/svgs/order_status.svg'
import related from '../assets/svgs/related.svg'
import delivery from '../assets/svgs/delivery.svg'
import refund from '../assets/svgs/refund.svg'
import order_return from '../assets/svgs/return.svg'
import about_us from '../assets/svgs/about_us.svg'
import statistic from '../assets/svgs/statistic.svg'
import notification from '../assets/svgs/notification.svg'
import password from '../assets/svgs/password.svg'
import ic_pick from '../assets/svgs/ic_pick.svg'

const SVGs = {
    google,
    facebook,
    check,
    eye,
    eye_open,
    check_white,
    home,
    home_focus,
    heart,
    heart_focus,
    book,
    book_focus,
    chat,
    chat_focus,
    search,
    ic_x,
    play,
    next_arrow,
    star,
    star_gold,
    heart_button_red,
    heart_button,
    back,
    chat_white,
    face,
    back_white,
    next_arrow_white,
    like,
    phone,
    ic_x_white,
    my_doctor,
    medical_record,
    medicine_order,
    setting,
    help_center,
    logout,
    payment,
    test_booking,
    privacy_policy,
    edit,
    invoice,
    prescription,
    report,
    options,
    guide,
    order_return,
    order_status,
    related,
    delivery,
    refund,
    about_us,
    statistic,
    password,
    notification,
    ic_pick
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}