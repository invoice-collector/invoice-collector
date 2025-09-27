
import { SketchCollector } from '../../sketchCollector';

export class OvhtelecomFrCollector extends SketchCollector {

    static CONFIG = {
        id: "ovhtelecom_fr",
        name: "ovhtelecom.fr",
        description: "i18n.collectors.ovhtelecom_fr.description",
        version: "0",
        website: "https://www.ovh.com/auth/?action=disconnect&onsuccess=https%3A%2F%2Fwww.ovhtelecom.fr%2Fmanager%2F%23%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24117.jpg",
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
        entryUrl: "https://www.ovh.com/auth/?action=disconnect&onsuccess=https%3A%2F%2Fwww.ovhtelecom.fr%2Fmanager%2F%23%2F",
    }

    constructor() {
        super(OvhtelecomFrCollector.CONFIG);
    }
}
