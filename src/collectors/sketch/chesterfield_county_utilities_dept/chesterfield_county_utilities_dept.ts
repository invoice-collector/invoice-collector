
import { SketchCollector } from '../../sketchCollector';

export class ChesterfieldCountyUtilitiesDeptCollector extends SketchCollector {

    static CONFIG = {
        id: "chesterfield_county_utilities_dept",
        name: "Chesterfield County: Utilities Dept",
        description: "i18n.collectors.chesterfield_county_utilities_dept.description",
        version: "0",
        website: "https://www.chesterfield.gov/236/Utilities",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798680.jpg",
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
        entryUrl: "https://www.chesterfield.gov/236/Utilities",
    }

    constructor() {
        super(ChesterfieldCountyUtilitiesDeptCollector.CONFIG);
    }
}
