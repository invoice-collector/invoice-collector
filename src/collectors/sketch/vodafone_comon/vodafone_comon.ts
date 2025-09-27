
import { SketchCollector } from '../../sketchCollector';

export class VodafoneComonCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_comon",
        name: "Vodafone ComOn",
        description: "i18n.collectors.vodafone_comon.description",
        version: "0",
        website: "https://comon.vodafone.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1615787.jpg",
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
        entryUrl: "https://comon.vodafone.de/login",
    }

    constructor() {
        super(VodafoneComonCollector.CONFIG);
    }
}
