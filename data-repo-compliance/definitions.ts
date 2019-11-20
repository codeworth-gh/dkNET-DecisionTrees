DataRepoCompliance: consists of Open, FAIR, Citable, Trustworthy, Properties.

Open: one of Closed, SomewhatOpen, FullyOpen.
FAIR: consists of Findable, Accessible, Interoperable, Reusable.
Citable: one of Unsupported, SomewhatSupported, FullySupported.
Trustworthy: one of SignificantConcerns, MinorConcerns, NoConcerns.

Findable: one of NotFindable, SomewhatFindable, FullyFindable.
Accessible: one of NotAccessible, SomewhatAccessible, FullyAccessible.
Interoperable: one of NotInteroperable, SomewhatInteroperable, FullyInteroperable.
Reusable: one of NotReusable, SomewhatReusable, FullyReusable.

Properties: consists of OpenProps, FindableProps, AccessibleProps, InteroperableProps, ReusableProps.

OpenProps: consists of Restrictions, OpenFlags.
OpenFlags: some of humanAccessible, machineAccessible, openFormat, openLicense,
                    platformSupportsDataWork,
                    restrictionsNotJustified, authorizationRequired.
Restrictions: one of none, minimal, significant.

AccessibleProps: some of
  PersistentMetadata,
  CommunityStandard,
  License,
  StdApi[Accessible via standard API].

FindableProps: consists of PersistentIdentifier, MetadataGrade, FindableFlags.
FindableFlags: some of humanAccessible, machineAccessible, PidInMetadata.
PersistentIdentifier: one of none, internalPID[Internally assigned identifier (e.g. UUID)],
                            externalPID[Externally assigned identifier (e.g. DOI)].
MetadataGrade: one of minimal, limited, rich.

InteroperableProps: some of Scholix, DataCite, FormalMetadataVocabulary, FairMetadata, QualifiedMetadataReferences.
ReusableProps: some of
  Provision,
  DkNetMetadata,
  GeneralMetadata,
  CCLicense[Commons Compliant License.],
  MetadataProvenance.
