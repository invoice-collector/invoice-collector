
import { SketchCollector } from '../../sketchCollector';

export class BlauDirektGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "blau_direkt_gmbh",
        name: "blau direkt GmbH",
        description: "i18n.collectors.blau_direkt_gmbh.description",
        version: "0",
        website: "https://www.maklerinfo.biz/maklerportal/?job=Konto&Job_art=lizenz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919992.jpg",
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
        entryUrl: "https://www.maklerinfo.biz/maklerportal/?job=Konto&Job_art=lizenz",
    }

    constructor() {
        super(BlauDirektGmbhCollector.CONFIG);
    }
}
