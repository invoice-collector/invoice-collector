
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeFellbachCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_fellbach",
        name: "Stadtwerke Fellbach",
        description: "i18n.collectors.stadtwerke_fellbach.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-fellbach.de/csit/action/csLogin?formReset.x=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90978.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-fellbach.de/csit/action/csLogin?formReset.x=true",
    }

    constructor() {
        super(StadtwerkeFellbachCollector.CONFIG);
    }
}
