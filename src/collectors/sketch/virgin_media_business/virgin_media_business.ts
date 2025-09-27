
import { SketchCollector } from '../../sketchCollector';

export class VirginMediaBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "virgin_media_business",
        name: "Virgin Media Business",
        description: "i18n.collectors.virgin_media_business.description",
        version: "0",
        website: "https://mybill.virginmediabusiness.co.uk/group/analysis/downloads",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41847.jpg",
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
        entryUrl: "https://mybill.virginmediabusiness.co.uk/group/analysis/downloads",
    }

    constructor() {
        super(VirginMediaBusinessCollector.CONFIG);
    }
}
