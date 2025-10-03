
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WwwNetfactoryDeCollector extends SketchCollector {

    static CONFIG = {
        id: "www_netfactory_de",
        name: "www.netfactory.de",
        description: "i18n.collectors.www_netfactory_de.description",
        version: "0",
        website: "https://www.netfactory.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037324.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.netfactory.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WwwNetfactoryDeCollector.CONFIG);
    }
}
