
import { SketchCollector } from '../../sketchCollector';

export class LondonpresenceComMadeSimpleGroupLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "londonpresence_com_made_simple_group_ltd",
        name: "LondonPresence.com - Made Simple Group Ltd",
        description: "i18n.collectors.londonpresence_com_made_simple_group_ltd.description",
        version: "0",
        website: "https://www.londonpresence.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21711.jpg",
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
        entryUrl: "https://www.londonpresence.com/login/",
    }

    constructor() {
        super(LondonpresenceComMadeSimpleGroupLtdCollector.CONFIG);
    }
}
