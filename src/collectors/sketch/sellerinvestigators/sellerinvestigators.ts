
import { SketchCollector } from '../../sketchCollector';

export class SellerinvestigatorsCollector extends SketchCollector {

    static CONFIG = {
        id: "sellerinvestigators",
        name: "sellerinvestigators",
        description: "i18n.collectors.sellerinvestigators.description",
        version: "0",
        website: "https://login.carbon6.io/u/login?state=hKFo2SBPZFZ3Z0preFRlVlhGcVZMbllzZ0t3SFpobFRDOTVKQaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGJ1RGpxODdhVTdBbTJCRm9JUWZZOFlrcXJKV1FON3BUo2NpZNkgSjF0dXowUEoweVp1ZGFSQzhXMlliT1hLSDhYVVBPVVM",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2017562.jpg",
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
        entryUrl: "https://login.carbon6.io/u/login?state=hKFo2SBPZFZ3Z0preFRlVlhGcVZMbllzZ0t3SFpobFRDOTVKQaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGJ1RGpxODdhVTdBbTJCRm9JUWZZOFlrcXJKV1FON3BUo2NpZNkgSjF0dXowUEoweVp1ZGFSQzhXMlliT1hLSDhYVVBPVVM",
    }

    constructor() {
        super(SellerinvestigatorsCollector.CONFIG);
    }
}
