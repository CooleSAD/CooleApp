import PersianJS from "persianjs";
import moment from "jalali-moment";

export default function getPersianDate(date) {
    return (
        PersianJS(moment(date).locale("fa").format("D"))
          .englishNumber()
          .toString() +
        " " +
        moment(date).locale("fa").format("MMMM")
    )
}