
import { SketchCollector } from '../../sketchCollector';

export class TntBulgariaCollector extends SketchCollector {

    static CONFIG = {
        id: "tnt_bulgaria",
        name: "TNT Bulgaria",
        description: "i18n.collectors.tnt_bulgaria.description",
        version: "0",
        website: "https://efaktura.bg/?l=bul",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153614.jpg",
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
        entryUrl: "https://efaktura.bg/?l=bul",
    }

    constructor() {
        super(TntBulgariaCollector.CONFIG);
    }
}
