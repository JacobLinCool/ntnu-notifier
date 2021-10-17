import { CsieNotifier } from "../lib";

const notifier = new CsieNotifier();

notifier.listen("notify", (noti, news) => {
    console.log(noti.name, news);
});

notifier.start();
