
import { SketchCollector } from '../../sketchCollector';

export class MysitesGuruCollector extends SketchCollector {

    static CONFIG = {
        id: "mysites_guru",
        name: "mySites.guru",
        description: "i18n.collectors.mysites_guru.description",
        version: "0",
        website: "https://manage.mysites.guru/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201081.jpg",
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
        entryUrl: "https://manage.mysites.guru/en/login",
    }

    constructor() {
        super(MysitesGuruCollector.CONFIG);
    }
}
