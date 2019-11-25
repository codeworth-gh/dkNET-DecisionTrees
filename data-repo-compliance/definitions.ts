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


AccessibleProps: consists of MetadataPersistence, ReuseLicense, AccessibleFlags.

AccessibleFlags: some of
  persistentMetadata,
  CommunityStandard,
  License,
  StdApi[Accessible via standard API].

ReuseLicense: one of None, RepositoryLevel, DatasetLevel.

MetadataPersistence[Are the medatadata kept after the data is deaccessioned?]: one of
  unknown, byEvidence, byStatedPolicy.


FindableProps: consists of PersistentIdentifier, MetadataGrade, IdInMetadata, FindableFlags.
FindableFlags: some of humanAccessible, machineAccessible, idInMetadata, internalSearch.
PersistentIdentifier: one of none, internalPID[Internally assigned identifier (e.g. UUID)],
                            externalPID[Externally assigned identifier (e.g. DOI)].
MetadataGrade: one of minimal, limited, rich.
IdInMetadata: one of none[All study IDs are included in the metadata],
                     partial[Some study IDs are included, e.g., accession number but not DOI],
                     all[No IDs].

InteroperableProps: consists of MetadataFAIRness, MetadataReferenceQuality, InteroperableFlags.
InteroperableFlags: some of FormalMetadataVocabulary, FairMetadata, QualifiedMetadataReferences.
MetadataFAIRness: one of minimal[Minimal or no mapping to appropriate ontologies],
                         allowed[Metadata may conform to FAIR vocabulary, but it's not enforced],
                         enforced[Metadata must conform to a FAIR vocabulary].
MetadataReferenceQuality: one of freeText, informal, formal.

ReusableProps: some of
  Provision,
  DkNetMetadata,
  GeneralMetadata,
  CCLicense[Commons Compliant License.],
  MetadataProvenance.
