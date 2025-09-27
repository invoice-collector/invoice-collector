
import { SketchCollector } from '../../sketchCollector';

export class OvhFrCollector extends SketchCollector {

    static CONFIG = {
        id: "ovh_fr",
        name: "OVH.fr",
        description: "i18n.collectors.ovh_fr.description",
        version: "0",
        website: "https://www.ovh.com/auth/?action=gotomanager&onsuccess=https://www.ovh.com/manager/web/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87301.jpg",
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
        entryUrl: "https://www.ovh.com/auth/?action=gotomanager&onsuccess=https://www.ovh.com/manager/web/",
    }

    constructor() {
        super(OvhFrCollector.CONFIG);
    }
}
