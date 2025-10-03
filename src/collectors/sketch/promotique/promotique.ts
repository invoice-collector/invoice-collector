
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PromotiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "promotique",
        name: "Promotique",
        description: "i18n.collectors.promotique.description",
        version: "0",
        website: "https://account.vistaprint.com/login?state=hKFo2SAtYUYxa1VVakVEaG1QS3QtcTZPaUtxVDVDd0c5TzB0dKFupWxvZ2luo3RpZNkgZU1FUzl5RVZnempnVTBHVHFMM1ZJY29Ldl9NOHFtNnejY2lk2SBZaFdpWFdOMTJ1RFNlWW82MkJZMnVEMzV2V0xlRVR4MQ&client=YhWiXWN12uDSeYo62BY2uD35vWLeETx1&protocol=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060592.jpg",
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
        entryUrl: "https://account.vistaprint.com/login?state=hKFo2SAtYUYxa1VVakVEaG1QS3QtcTZPaUtxVDVDd0c5TzB0dKFupWxvZ2luo3RpZNkgZU1FUzl5RVZnempnVTBHVHFMM1ZJY29Ldl9NOHFtNnejY2lk2SBZaFdpWFdOMTJ1RFNlWW82MkJZMnVEMzV2V0xlRVR4MQ&client=YhWiXWN12uDSeYo62BY2uD35vWLeETx1&protocol=",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PromotiqueCollector.CONFIG);
    }
}
