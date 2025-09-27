
import { SketchCollector } from '../../sketchCollector';

export class SakariCollector extends SketchCollector {

    static CONFIG = {
        id: "sakari",
        name: "SAKARI",
        description: "i18n.collectors.sakari.description",
        version: "0",
        website: "https://auth.sakari.io/u/login?state=hKFo2SBPcnpDbWxrVTA2RnN1R0lveGtBZTJHOHd6aTBxdkRfcaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFZDS0hCeVVfdmdVTmNaLWVDUE9HVnZxamFJVHVOS0pVo2NpZNkgVlZua0lWcE95eVRaYzIyRWRPTHA0bjZYMlZBeWNMTHQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1467962.jpg",
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
        entryUrl: "https://auth.sakari.io/u/login?state=hKFo2SBPcnpDbWxrVTA2RnN1R0lveGtBZTJHOHd6aTBxdkRfcaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFZDS0hCeVVfdmdVTmNaLWVDUE9HVnZxamFJVHVOS0pVo2NpZNkgVlZua0lWcE95eVRaYzIyRWRPTHA0bjZYMlZBeWNMTHQ",
    }

    constructor() {
        super(SakariCollector.CONFIG);
    }
}
