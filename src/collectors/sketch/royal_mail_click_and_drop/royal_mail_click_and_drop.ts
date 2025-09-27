
import { SketchCollector } from '../../sketchCollector';

export class RoyalMailClickAndDropCollector extends SketchCollector {

    static CONFIG = {
        id: "royal_mail_click_and_drop",
        name: "Royal Mail - Click and Drop",
        description: "i18n.collectors.royal_mail_click_and_drop.description",
        version: "0",
        website: "https://auth.parcel.royalmail.com/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dsflite%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.parcel.royalmail.com%252Fcallback%",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/830199.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://auth.parcel.royalmail.com/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dsflite%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.parcel.royalmail.com%252Fcallback%",
    }

    constructor() {
        super(RoyalMailClickAndDropCollector.CONFIG);
    }
}
