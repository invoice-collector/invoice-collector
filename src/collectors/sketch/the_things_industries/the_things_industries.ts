
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheThingsIndustriesCollector extends SketchCollector {

    static CONFIG = {
        id: "the_things_industries",
        name: "The Things Industries",
        description: "i18n.collectors.the_things_industries.description",
        version: "0",
        website: "https://accounts.thethingsindustries.com/dashboard/subscriptions/sub_1ObdRdBfIIHupA2rb7uAawLm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695825.jpg",
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
        entryUrl: "https://accounts.thethingsindustries.com/dashboard/subscriptions/sub_1ObdRdBfIIHupA2rb7uAawLm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheThingsIndustriesCollector.CONFIG);
    }
}
