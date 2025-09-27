
import { SketchCollector } from '../../sketchCollector';

export class DerTheaterVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "der_theater_verlag",
        name: "DER THEATER VERLAG",
        description: "i18n.collectors.der_theater_verlag.description",
        version: "0",
        website: "https://shop.der-theaterverlag.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860286.jpg",
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
        entryUrl: "https://shop.der-theaterverlag.de/",
    }

    constructor() {
        super(DerTheaterVerlagCollector.CONFIG);
    }
}
