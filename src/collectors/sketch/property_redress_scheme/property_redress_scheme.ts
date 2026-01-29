
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PropertyRedressSchemeCollector extends SketchCollector {

    static CONFIG = {
        id: "property_redress_scheme",
        name: "Property Redress Scheme",
        description: "i18n.collectors.property_redress_scheme.description",
        version: "0",
        website: "https://www.theprs.co.uk/propertyagent/dashboard/#mebership",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21944.jpg",
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
        loginUrl: "https://www.theprs.co.uk/propertyagent/dashboard/#mebership",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PropertyRedressSchemeCollector.CONFIG);
    }
}
