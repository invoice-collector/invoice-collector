
import { SketchCollector } from '../../sketchCollector';

export class ZiggoZakelijkCollector extends SketchCollector {

    static CONFIG = {
        id: "ziggo_zakelijk",
        name: "ziggo zakelijk",
        description: "i18n.collectors.ziggo_zakelijk.description",
        version: "0",
        website: "https://factuur.ziggozakelijk.nl/ziggo/welcome.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875950.jpg",
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
        entryUrl: "https://factuur.ziggozakelijk.nl/ziggo/welcome.html",
    }

    constructor() {
        super(ZiggoZakelijkCollector.CONFIG);
    }
}
