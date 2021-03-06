/**
 * Enum representation Melee action states.
 *
 * Taken from https://smashboards.com/threads/list-of-all-possible-character-states-ie-downdamage-downwait.400270/post-19055623
 * with some healthy use of regex to format it into an enum.
 */
export enum ActionState {
  DeadDown = 0x000, // 'Standard downward death',
  DeadLeft = 0x001, // 'Standard leftward death',
  DeadRight = 0x002, // 'Standard rightward death',
  DeadUp = 0x003, // 'Upward death used in 1P Team Kirby, etc.',
  DeadUpStar = 0x004, // 'Standard Star KO',
  DeadUpStarIce = 0x005, // 'Star KO while encased in ice (Freezie)',
  DeadUpFall = 0x006, // '64-esque front fall, unused, I believe',
  DeadUpFallHitCamera = 0x007,
  DeadUpFallHitCameraFlat = 0x008,
  DeadUpFallIce = 0x009,
  DeadUpFallHitCameraIce = 0x00a,
  Sleep = 0x00b, // 'Nothing state, probably - it is the state Shiek/Zelda is in when their counterpart is the one currently playing',
  Rebirth = 0x00c, // 'Entering on halo',
  RebirthWait = 0x00d, // 'Waiting on halo',
  Wait = 0x00e, // 'Standing state',
  WalkSlow = 0x00f,
  WalkMiddle = 0x010,
  WalkFast = 0x011,
  Turn = 0x012,
  TurnRun = 0x013,
  Dash = 0x014,
  Run = 0x015,
  RunDirect = 0x016,
  RunBrake = 0x017,
  KneeBend = 0x018, // 'Pre-jump animation',
  JumpF = 0x019, // 'First jump forward',
  JumpB = 0x01a, // 'First jump backward',
  JumpAerialF = 0x01b, // 'Aerial jump forward',
  JumpAerialB = 0x01c, // 'Aerial jump backward',
  Fall = 0x01d, // 'Falling straight down',
  FallF = 0x01e, // 'Falling with forward DI',
  FallB = 0x01f, // 'Falling with backward DI',
  FallAerial = 0x020, // 'Falling after the second jump',
  FallAerialF = 0x021, // 'Falling after the second jump with forward DI',
  FallAerialB = 0x022, // 'Falling after the second jump with backward DI',
  FallSpecial = 0x023, // 'Special fall after UpB or airdodge',
  FallSpecialF = 0x024, // 'Special fall with forward DI',
  FallSpecialB = 0x025, // 'Special fall with backward DI',
  DamageFall = 0x026, // 'Tumbling',
  Squat = 0x027, // 'Going from stand to crouch',
  SquatWait = 0x028, // 'Crouching',
  SquatRv = 0x029, // 'Going from crouch to stand',
  Landing = 0x02a, // 'Landing state, can be cancelled',
  LandingFallSpecial = 0x02b, // 'Landing from special fall',
  Attack11 = 0x02c, // 'Standard attack 1',
  Attack12 = 0x02d, // 'Standard attack 2',
  Attack13 = 0x02e, // 'Standard attack 3',
  Attack100Start = 0x02f, // 'Start of a looping standard attack',
  Attack100Loop = 0x030, // 'Middle of a looping standard attack',
  Attack100End = 0x031, // 'End of a looping standard attack',
  AttackDash = 0x032, // 'Dash attack',
  AttackS3Hi = 0x033, // 'High Ftilt',
  AttackS3HiS = 0x034, // 'High-mid Ftilt',
  AttackS3S = 0x035, // 'Mid Ftilt',
  AttackS3LwS = 0x036, // 'Low-mid Ftilt',
  AttackS3Lw = 0x037, // 'Low Ftilt',
  AttackHi3 = 0x038, // 'Uptilt',
  AttackLw3 = 0x039, // 'Downtilt',
  AttackS4Hi = 0x03a, // 'High Fsmash',
  AttackS4HiS = 0x03b, // 'High-mid Fsmash',
  AttackS4S = 0x03c, // 'Mid Fsmash',
  AttackS4LwS = 0x03d, // 'Low-mid Fsmash',
  AttackS4Lw = 0x03e, // 'Low Fsmash',
  AttackHi4 = 0x03f, // 'Upsmash',
  AttackLw4 = 0x040, // 'Downsmash',
  AttackAirN = 0x041, // 'Nair',
  AttackAirF = 0x042, // 'Fair',
  AttackAirB = 0x043, // 'Bair',
  AttackAirHi = 0x044, // 'Uair',
  AttackAirLw = 0x045, // 'Dair',
  LandingAirN = 0x046, // 'Landing during Nair',
  LandingAirF = 0x047, // 'Landing during Fair',
  LandingAirB = 0x048, // 'Landing during Bair',
  LandingAirHi = 0x049, // 'Landing during Uair',
  LandingAirLw = 0x04a, // 'Landing during Dair',
  DamageHi1 = 0x04b,
  DamageHi2 = 0x04c,
  DamageHi3 = 0x04d,
  DamageN1 = 0x04e,
  DamageN2 = 0x04f,
  DamageN3 = 0x050,
  DamageLw1 = 0x051,
  DamageLw2 = 0x052,
  DamageLw3 = 0x053,
  DamageAir1 = 0x054,
  DamageAir2 = 0x055,
  DamageAir3 = 0x056,
  DamageFlyHi = 0x057,
  DamageFlyN = 0x058,
  DamageFlyLw = 0x059,
  DamageFlyTop = 0x05a,
  DamageFlyRoll = 0x05b,
  LightGet = 0x05c, // 'Picking up an item',
  HeavyGet = 0x05d, // 'Picking up a heavy item (barrel)',
  LightThrowF = 0x05e, // 'Throwing items at standard speed',
  LightThrowB = 0x05f,
  LightThrowHi = 0x060,
  LightThrowLw = 0x061,
  LightThrowDash = 0x062,
  LightThrowDrop = 0x063,
  LightThrowAirF = 0x064,
  LightThrowAirB = 0x065,
  LightThrowAirHi = 0x066,
  LightThrowAirLw = 0x067,
  HeavyThrowF = 0x068,
  HeavyThrowB = 0x069,
  HeavyThrowHi = 0x06a,
  HeavyThrowLw = 0x06b,
  LightThrowF4 = 0x06c, // 'Throwing items at Smash speed',
  LightThrowB4 = 0x06d,
  LightThrowHi4 = 0x06e,
  LightThrowLw4 = 0x06f,
  LightThrowAirF4 = 0x070,
  LightThrowAirB4 = 0x071,
  LightThrowAirHi4 = 0x072,
  LightThrowAirLw4 = 0x073,
  HeavyThrowF4 = 0x074,
  HeavyThrowB4 = 0x075,
  HeavyThrowHi4 = 0x076,
  HeavyThrowLw4 = 0x077,
  SwordSwing1 = 0x078, // 'Beam sword swings',
  SwordSwing3 = 0x079,
  SwordSwing4 = 0x07a,
  SwordSwingDash = 0x07b,
  BatSwing1 = 0x07c, // 'Home Run Bat swings',
  BatSwing3 = 0x07d,
  BatSwing4 = 0x07e,
  BatSwingDash = 0x07f,
  ParasolSwing1 = 0x080, // 'Parasol swings',
  ParasolSwing3 = 0x081,
  ParasolSwing4 = 0x082,
  ParasolSwingDash = 0x083,
  HarisenSwing1 = 0x084, // 'Fan swings',
  HarisenSwing3 = 0x085,
  HarisenSwing4 = 0x086,
  HarisenSwingDash = 0x087,
  StarRodSwing1 = 0x088, // 'Star Rod swings',
  StarRodSwing3 = 0x089,
  StarRodSwing4 = 0x08a,
  StarRodSwingDash = 0x08b,
  LipStickSwing1 = 0x08c, // 'Lip's Stick swings',
  LipStickSwing3 = 0x08d,
  LipStickSwing4 = 0x08e,
  LipStickSwingDash = 0x08f,
  ItemParasolOpen = 0x090,
  ItemParasolFall = 0x091,
  ItemParasolFallSpecial = 0x092,
  ItemParasolDamageFall = 0x093,
  LGunShoot = 0x094, // 'Raygun shots',
  LGunShootAir = 0x095,
  LGunShootEmpty = 0x096,
  LGunShootAirEmpty = 0x097,
  FireFlowerShoot = 0x098,
  FireFlowerShootAir = 0x099,
  ItemScrew = 0x09a,
  ItemScrewAir = 0x09b,
  DamageScrew = 0x09c,
  DamageScrewAir = 0x009,
  ItemScopeStart = 0x09e,
  ItemScopeRapid = 0x09f,
  ItemScopeFire = 0x0a0,
  ItemScopeEnd = 0x0a1,
  ItemScopeAirStart = 0x0a2,
  ItemScopeAirRapid = 0x0a3,
  ItemScopeAirFire = 0x0a4,
  ItemScopeAirEnd = 0x0a5,
  ItemScopeStartEmpty = 0x0a6,
  ItemScopeRapidEmpty = 0x0a7,
  ItemScopeFireEmpty = 0x0a8,
  ItemScopeEndEmpty = 0x0a9,
  ItemScopeAirStartEmpty = 0x0aa,
  ItemScopeAirRapidEmpty = 0x0ab,
  ItemScopeAirFireEmpty = 0x0ac,
  ItemScopeAirEndEmpty = 0x0ad,
  LiftWait = 0x0ae,
  LiftWalk1 = 0x0af,
  LiftWalk2 = 0x0b0,
  LiftTurn = 0x0b1,
  GuardOn = 0x0b2,
  Guard = 0x0b3, // 'Holding shield',
  GuardOff = 0x0b4,
  GuardSetOff = 0x0b5, // 'Shield stun',
  GuardReflect = 0x0b6,
  DownBoundU = 0x0b7, // 'The failed to tech bounce, facing up',
  DownWaitU = 0x0b8, // 'Laying on ground facing up',
  DownDamageU = 0x0b9, // 'Getting hit laying on ground facing up',
  DownStandU = 0x0ba,
  DownAttackU = 0x0bb, // 'Get up attack from ground face up',
  DownFowardU = 0x0bc,
  DownBackU = 0x0bd,
  DownSpotU = 0x0be,
  DownBoundD = 0x0bf, // 'The failed to tech bounce, facing down',
  DownWaitD = 0x0c0,
  DownDamageD = 0x0c1,
  DownStandD = 0x0c2,
  DownAttackD = 0x0c3,
  DownFowardD = 0x0c4,
  DownBackD = 0x0c5,
  DownSpotD = 0x0c6,
  Passive = 0x0c7, // 'Neutral tech',
  PassiveStandF = 0x0c8, // 'Forward tech',
  PassiveStandB = 0x0c9, // 'Backward tech',
  PassiveWall = 0x0ca, // 'Wall tech',
  PassiveWallJump = 0x0cb, // 'Walljump tech/plain walljump',
  PassiveCeil = 0x0cc, // 'Ceiling tech',
  ShieldBreakFly = 0x0cd,
  ShieldBreakFall = 0x0ce,
  ShieldBreakDownU = 0x0cf,
  ShieldBreakDownD = 0x0d0,
  ShieldBreakStandU = 0x0d1,
  ShieldBreakStandD = 0x0d2,
  FuraFura = 0x0d3, // 'Shield-break tottering',
  Catch = 0x0d4, // 'Grab',
  CatchPull = 0x0d5, // 'Successfully grabbing a character - pulling them in',
  CatchDash = 0x0d6,
  CatchDashPull = 0x0d7,
  CatchWait = 0x0d8, // 'Grabbing and holding a character',
  CatchAttack = 0x0d9, // 'Pummel',
  CatchCut = 0x0da, // 'When opponent breaks of a character's grab',
  ThrowF = 0x0db,
  ThrowB = 0x0dc,
  ThrowHi = 0x0dd,
  ThrowLw = 0x0de,
  CapturePulledHi = 0x0df,
  CaptureWaitHi = 0x0e0,
  CaptureDamageHi = 0x0e1,
  CapturePulledLw = 0x0e2,
  CaptureWaitLw = 0x0e3,
  CaptureDamageLw = 0x0e4,
  CaptureCut = 0x0e5,
  CaptureJump = 0x0e6,
  CaptureNeck = 0x0e7,
  CaptureFoot = 0x0e8,
  EscapeF = 0x0e9,
  EscapeB = 0x0ea,
  Escape = 0x0eb,
  EscapeAir = 0x0ec, // 'airdodge',
  ReboundStop = 0x0ed,
  Rebound = 0x0ee,
  ThrownF = 0x0ef,
  ThrownB = 0x0f0,
  ThrownHi = 0x0f1,
  ThrownLw = 0x0f2,
  ThrownLwWomen = 0x0f3,
  Pass = 0x0f4, // 'Drop through platform',
  Ottotto = 0x0f5, // 'Ledge teeter',
  OttottoWait = 0x0f6,
  FlyReflectWall = 0x0f7,
  FlyReflectCeil = 0x0f8,
  StopWall = 0x0f9,
  StopCeil = 0x0fa,
  MissFoot = 0x0fb,
  CliffCatch = 0x0fc, // 'Catching the ledge',
  CliffWait = 0x0fd, // 'Hanging on the ledge',
  CliffClimbSlow = 0x0fe, // 'Climbing the ledge, >100%',
  CliffClimbQuick = 0x0ff, // 'Climbing the ledge, <100%',
  CliffAttackSlow = 0x100, // 'Ledge attack, >100%',
  liffAttackQuick = 0x101, // 'Ledge attack, <100%',
  CliffEscapeSlow = 0x102, // 'Ledge roll, >100%',
  CliffEscapeQuick = 0x103, // 'Ledge roll, <100%',
  CliffJumpSlow1 = 0x104,
  CliffJumpSlow2 = 0x105,
  CliffJumpQuick1 = 0x106,
  CliffJumpQuick2 = 0x107,
  AppealR = 0x108, // 'Taunt right',
  AppealL = 0x109, // 'Taunt left',
  ShoulderedWait = 0x10a,
  ShoulderedWalkSlow = 0x10b,
  ShoulderedWalkMiddle = 0x10c,
  ShoulderedWalkFast = 0x10d,
  ShoulderedTurn = 0x10e,
  ThrownFF = 0x10f,
  ThrownFB = 0x110,
  ThrownFHi = 0x111,
  ThrownFLw = 0x112,
  CaptureCaptain = 0x113,
  CaptureYoshi = 0x114,
  YoshiEgg = 0x115,
  CaptureKoopa = 0x116,
  CaptureDamageKoopa = 0x117,
  CaptureWaitKoopa = 0x118,
  ThrownKoopaF = 0x119,
  ThrownKoopaB = 0x11a,
  CaptureKoopaAir = 0x11b,
  CaptureDamageKoopaAir = 0x11c,
  CaptureWaitKoopaAir = 0x11d,
  ThrownKoopaAirF = 0x11e,
  ThrownKoopaAirB = 0x11f,
  CaptureKirby = 0x120,
  CaptureWaitKirby = 0x121,
  ThrownKirbyStar = 0x122,
  ThrownCopyStar = 0x123,
  ThrownKirby = 0x124,
  BarrelWait = 0x125,
  Bury = 0x126,
  BuryWait = 0x127,
  BuryJump = 0x128,
  DamageSong = 0x129,
  DamageSongWait = 0x12a,
  DamageSongRv = 0x12b,
  DamageBind = 0x12c,
  CaptureMewtwo = 0x12d,
  CaptureMewtwoAir = 0x12e,
  ThrownMewtwo = 0x12f,
  ThrownMewtwoAir = 0x130,
  WarpStarJump = 0x131,
  WarpStarFall = 0x132,
  HammerWait = 0x133,
  HammerWalk = 0x134,
  HammerTurn = 0x135,
  HammerKneeBend = 0x136,
  HammerFall = 0x137,
  HammerJump = 0x138,
  HammerLanding = 0x139,
  KinokoGiantStart = 0x13a, // 'Super/Poison mushroom states',
  KinokoGiantStartAir = 0x13b,
  KinokoGiantEnd = 0x13c,
  KinokoGiantEndAir = 0x13d,
  KinokoSmallStart = 0x13e,
  KinokoSmallStartAir = 0x13f,
  KinokoSmallEnd = 0x140,
  KinokoSmallEndAir = 0x141,
  Entry = 0x142, // 'Warp in at beginning of match.',
  EntryStart = 0x143,
  EntryEnd = 0x144,
  DamageIce = 0x145,
  DamageIceJump = 0x146,
  CaptureMasterhand = 0x147,
  CapturedamageMasterhand = 0x148,
  CapturewaitMasterhand = 0x149,
  ThrownMasterhand = 0x14a,
  CaptureKirbyYoshi = 0x14b,
  KirbyYoshiEgg = 0x14c,
  CaptureLeadead = 0x14d,
  CaptureLikelike = 0x14e,
  DownReflect = 0x14f,
  CaptureCrazyhand = 0x150,
  CapturedamageCrazyhand = 0x151,
  CapturewaitCrazyhand = 0x152,
  ThrownCrazyhand = 0x153,
  BarrelCannonWait = 0x154,
  Wait1 = 0x155,
  Wait2 = 0x156,
  Wait3 = 0x157,
  Wait4 = 0x158,
  WaitItem = 0x159,
  SquatWait1 = 0x15a,
  SquatWait2 = 0x15b,
  SquatWaitItem = 0x15c,
  GuardDamage = 0x15d,
  EscapeN = 0x15e,
  AttackS4Hold = 0x15f,
  HeavyWalk1 = 0x160,
  HeavyWalk2 = 0x161,
  ItemHammerWait = 0x162,
  ItemHammerMove = 0x163,
  ItemBlind = 0x164,
  DamageElec = 0x165,
  FuraSleepStart = 0x166,
  FuraSleepLoop = 0x167,
  FuraSleepEnd = 0x168,
  WallDamage = 0x169,
  CliffWait1 = 0x16a,
  CliffWait2 = 0x16b,
  SlipDown = 0x16c,
  Slip = 0x16d,
  SlipTurn = 0x16e,
  SlipDash = 0x16f,
  SlipWait = 0x170,
  SlipStand = 0x171,
  SlipAttack = 0x172,
  SlipEscapeF = 0x173,
  SlipEscapeB = 0x174,
  AppealS = 0x175,
  Zitabata = 0x176,
  CaptureKoopaHit = 0x177,
  ThrownKoopaEndF = 0x178,
  ThrownKoopaEndB = 0x179,
  CaptureKoopaAirHit = 0x17a,
  ThrownKoopaAirEndF = 0x17b,
  ThrownKoopaAirEndB = 0x17c,
  ThrownKirbyDrinkSShot = 0x17d,
  ThrownKirbySpitSShot = 0x17e,
}
