
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheNavigatorCompanyCollector extends SketchCollector {

    static CONFIG = {
        id: "the_navigator_company",
        name: "The Navigator Company",
        description: "i18n.collectors.the_navigator_company.description",
        version: "0",
        website: "http://en.thenavigatorcompany.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9518.jpg",
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
        entryUrl: "http://en.thenavigatorcompany.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheNavigatorCompanyCollector.CONFIG);
    }
}
