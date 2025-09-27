
import { SketchCollector } from '../../sketchCollector';

export class OvhcloudCaCollector extends SketchCollector {

    static CONFIG = {
        id: "ovhcloud_ca",
        name: "OVHcloud CA",
        description: "i18n.collectors.ovhcloud_ca.description",
        version: "0",
        website: "https://ca.ovh.com/manager/#/hub/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1486178.jpg",
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
        entryUrl: "https://ca.ovh.com/manager/#/hub/",
    }

    constructor() {
        super(OvhcloudCaCollector.CONFIG);
    }
}
