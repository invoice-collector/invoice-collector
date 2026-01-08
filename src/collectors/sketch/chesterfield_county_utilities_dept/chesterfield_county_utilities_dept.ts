
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChesterfieldCountyUtilitiesDeptCollector extends SketchCollector {

    static CONFIG = {
        id: "chesterfield_county_utilities_dept",
        name: "Chesterfield County: Utilities Dept",
        description: "i18n.collectors.chesterfield_county_utilities_dept.description",
        version: "0",
        website: "https://www.chesterfield.gov/236/Utilities",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798680.jpg",
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
        loginUrl: "https://www.chesterfield.gov/236/Utilities",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChesterfieldCountyUtilitiesDeptCollector.CONFIG);
    }
}
