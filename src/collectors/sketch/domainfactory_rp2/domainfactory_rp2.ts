
import { SketchCollector } from '../../sketchCollector';

export class DomainfactoryRp2Collector extends SketchCollector {

    static CONFIG = {
        id: "domainfactory_rp2",
        name: "Domainfactory RP2",
        description: "i18n.collectors.domainfactory_rp2.description",
        version: "0",
        website: "https://www.df.eu/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1752791.jpg",
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
        entryUrl: "https://www.df.eu/de/",
    }

    constructor() {
        super(DomainfactoryRp2Collector.CONFIG);
    }
}
