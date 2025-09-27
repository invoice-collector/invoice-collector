
import { SketchCollector } from '../../sketchCollector';

export class CiviwebBulletinCollector extends SketchCollector {

    static CONFIG = {
        id: "civiweb_bulletin",
        name: "Civiweb - Bulletin",
        description: "i18n.collectors.civiweb_bulletin.description",
        version: "0",
        website: "https://www.civiweb.com/FR/article/votre-tableau-de-bord.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106542.jpg",
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
        entryUrl: "https://www.civiweb.com/FR/article/votre-tableau-de-bord.aspx",
    }

    constructor() {
        super(CiviwebBulletinCollector.CONFIG);
    }
}
